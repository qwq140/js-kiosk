let orderMenu = [];

let totalCount = 0;
let totalPrice = 0;

const orderInfoRefresh = () => {
    totalCount = 0;
    totalPrice = 0;
    orderMenu.forEach((e) => {
        totalCount += e.count;
        totalPrice += e.price * e.count;
    });
    console.log(orderMenu);
    document.getElementById('totalQuantitySpan').innerText = totalCount;
    document.getElementById('totalPriceSpan').innerText = `${totalPrice.toLocaleString()}원`;
}

const orderDelete = (id) => {
    orderMenu = orderMenu.filter((e) => e.id != id);
    document.getElementById(`cart_item_${id}`).remove();
    orderInfoRefresh();
}

const add = (id) => {
    let item = orderMenu.find((e) => e.id == id);
    item.count++;
    document.getElementById(`order_${id}`).innerText = item.count;
    document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
    orderInfoRefresh();
}

const minus = (id) => {
    let item = orderMenu.find((e) => e.id == id);
    if (item.count > 1) {
        item.count--;
        document.getElementById(`order_${id}`).innerText = item.count;
        document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
        orderInfoRefresh();
    }
}

const viewOrderMenu = () => {
    let cartArea = document.getElementById('cart_area');
    orderMenu.forEach((e) => {
        let html = `<div class="cart_item" id="cart_item_${e.id}">
                            <div class="top">
                                <span>${e.name}</span>
                                <button type="button" class="delete" onclick="orderDelete(${e.id})">X</button>
                            </div>
                            <div class="middle">
                                <span>수량</span>
                                <div class="wrap__quantity">
                                    <button type="button" class="plus" onclick="add(${e.id})">+</button>
                                    <span class="item_quantity" id="order_${e.id}">${e.count}</span>
                                    <button type="button" class="minus" onclick="minus(${e.id})">-</button>
                                </div>
                            </div>
                            <div class="bottom">
                                <span>가격</span>
                                <span id="order_price_${e.id}">${(e.price * e.count).toLocaleString()}원</span>
                            </div>
                        </div>`;
        cartArea.insertAdjacentHTML("beforeend", html);
    });
    orderInfoRefresh();
}

window.onload = () => {
    orderMenu = JSON.parse(localStorage.getItem("orderMenu"));
    viewOrderMenu();
}