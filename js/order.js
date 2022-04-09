let menu = [];

let orderMenu = [];

let totalCount = 0;
let totalPrice = 0;

const download = () => {
    menu = [
        {
            id: 1,
            name: '아메리카노',
            price: 3000,
            category: 'coffee'
        },
        {
            id: 2,
            name: '아이스 아메리카노',
            price: 3500,
            category: 'coffee'
        },
        {
            id: 3,
            name: '카페라떼',
            price: 4000,
            category: 'coffee'
        },
        {
            id: 4,
            name: '아이스 카페라떼',
            price: 4500,
            category: 'coffee'
        },
        {
            id: 5,
            name: '바닐라빈라떼',
            price: 4500,
            category: 'coffee'
        },
        {
            id: 6,
            name: '아이스 바닐라빈라떼',
            price: 5000,
            category: 'coffee'
        },
        {
            id: 7,
            name: '캐러멜라떼',
            price: 4500,
            category: 'coffee'
        },
        {
            id: 8,
            name: '아이스 캐러멜라떼',
            price: 5000,
            category: 'coffee'
        },
        {
            id: 9,
            name: '카페모카',
            price: 4500,
            category: 'coffee'
        },
        {
            id: 10,
            name: '아이스 카페모카',
            price: 5000,
            category: 'coffee'
        },
        {
            id: 11,
            name: '얼그레이',
            price: 3000,
            category: 'tea'
        },
        {
            id: 12,
            name: '아이스 얼그레이',
            price: 3500,
            category: 'tea'
        },
        {
            id: 13,
            name: '잉글리쉬브랙퍼스트',
            price: 3000,
            category: 'tea'
        },
        {
            id: 14,
            name: '아이스 잉글리쉬브랙퍼스트',
            price: 3500,
            category: 'tea'
        },
        {
            id: 15,
            name: '애플티',
            price: 3000,
            category: 'tea'
        },
        {
            id: 16,
            name: '아이스 애플티',
            price: 3500,
            category: 'tea'
        },
        {
            id: 17,
            name: '캐모마일',
            price: 3000,
            category: 'tea'
        },
        {
            id: 18,
            name: '아이스 캐모마일',
            price: 3500,
            category: 'tea'
        },
        {
            id: 19,
            name: '루이보스',
            price: 3000,
            category: 'tea'
        },
        {
            id: 20,
            name: '아이스 루이보스',
            price: 3500,
            category: 'tea'
        },
        {
            id: 21,
            name: '진저레몬',
            price: 3000,
            category: 'tea'
        },
        {
            id: 22,
            name: '아이스 진저레몬',
            price: 3500,
            category: 'tea'
        },
        {
            id: 23,
            name: '핫초콜릿',
            price: 3000,
            category: 'tea'
        },
        {
            id: 24,
            name: '아이스 초콜릿',
            price: 3500,
            category: 'tea'
        },
        {
            id: 25,
            name: '잠봉뵈르',
            price: 6000,
            category: 'sandwich'
        },
        {
            id: 26,
            name: '치킨클럽샌드위치',
            price: 6500,
            category: 'sandwich'
        },
        {
            id: 27,
            name: 'BLT샌드위치',
            price: 6500,
            category: 'sandwich'
        }
    ];
}

// 메뉴를 화면에 그려주는 역할
const view = (list) => {
    let menuArea = document.getElementById('menu_area');
    while (menuArea.hasChildNodes()) {
        menuArea.removeChild(menuArea.firstChild);
    }
    list.forEach((e) => {
        let html = `<li class="menu" onclick="selectMenu(${e.id})"><p class="menu_name"><span>${e.name}</span></p><p class="menu_price">${e.price.toLocaleString()} 원</p></li>`;
        menuArea.insertAdjacentHTML("beforeend", html);
    });
}

// 커피 탭인지 차 탭인지 샌드위치 탭인지 선택
// 1 : 커피, 2 : 차, 3 : 샌드위치
const selectTab = (tabNum) => {
    let temp = [];
    switch (tabNum) {
        case 1:
            temp = menu.filter(e => e.category == 'coffee');
            break;
        case 2:
            temp = menu.filter(e => e.category == 'tea');
            break;
        case 3:
            temp = menu.filter(e => e.category == 'sandwich');
            break;
    }
    view(temp);
}

// 토탈 상품 갯수, 토탈 금액 리프레시
const orderInfoRefresh = () => {
    totalCount = 0;
    totalPrice = 0;
    orderMenu.forEach((e) => {
        totalCount += e.count;
        totalPrice += e.price * e.count;
    });
    document.getElementById('totalQuantitySpan').innerText = totalCount;
    document.getElementById('totalPriceSpan').innerText = `${totalPrice.toLocaleString()}원`;
}

// 선택한 메뉴를 화면에 뿌림
const viewSelectMenu = (menu) => {
    let cartArea = document.getElementById('cart_area');
    let html = `<div class="cart_item" id="cart_item_${menu.id}">
                            <div class="top">
                                <span>${menu.name}</span>
                                <button type="button" class="delete" onclick="orderDelete(${menu.id})">X</button>
                            </div>
                            <div class="middle">
                                <span>수량</span>
                                <div class="wrap__quantity">
                                    <button type="button" class="plus" onclick="add(${menu.id})">+</button>
                                    <span class="item_quantity" id="order_${menu.id}">${menu.count}</span>
                                    <button type="button" class="minus" onclick="minus(${menu.id})">-</button>
                                </div>
                            </div>
                            <div class="bottom">
                                <span>가격</span>
                                <span id="order_price_${menu.id}">${menu.price.toLocaleString()}원</span>
                            </div>
                        </div>`;
    cartArea.insertAdjacentHTML("beforeend", html);
}

// 메뉴에서 선택
const selectMenu = (id) => {
    let selectMenu = menu.find((e) => e.id == id);
    let orderMenuItem = orderMenu.find((e) => e.id == id);
    if (orderMenuItem == null) {
        selectMenu.count = 1;
        orderMenu.push(selectMenu);
        viewSelectMenu(selectMenu);
    } else {
        orderMenuItem.count++;
        document.getElementById(`order_${id}`).innerText = orderMenuItem.count;
        document.getElementById(`order_price_${id}`).innerText = `${(orderMenuItem.price * orderMenuItem.count).toLocaleString()}원`;
    }
    orderInfoRefresh();
}

// 주문 리스트에서 해당 상품 삭제
const orderDelete = (id) => {
    orderMenu = orderMenu.filter((e) => e.id != id);
    document.getElementById(`cart_item_${id}`).remove();
    orderInfoRefresh();
}

// 주문 내역에서 갯수 증가
const add = (id) => {
    let item = orderMenu.find((e) => e.id == id);
    item.count++;
    document.getElementById(`order_${id}`).innerText = item.count;
    document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
    orderInfoRefresh();
}

// 주문 내역에서 갯수 감소
const minus = (id) => {
    let item = orderMenu.find((e) => e.id == id);
    if (item.count > 1) {
        item.count--;
        document.getElementById(`order_${id}`).innerText = item.count;
        document.getElementById(`order_price_${id}`).innerText = `${(item.price * item.count).toLocaleString()}원`;
        orderInfoRefresh();
    }
}

const goPaymentPage = () => {
    // 결제 페이지로 이동할 때 order 리스트를 보관하기 위해 로컬스토리지 사용
    if (orderMenu.length === 0) {
        alert('메뉴를 적어도 한 개 선택해주세요');
        return;
    }
    localStorage.setItem('orderMenu', JSON.stringify(orderMenu));
    // 결제 페이지 이동
    location.href = 'payment.html';
}

// 첫 시작
window.onload = () => {
    // 결제 페이지에서 주문 페이지로 뒤로가기 했을 때 데이터 불러오기
    if (localStorage.getItem("orderMenu") != '') {
        orderMenu = JSON.parse(localStorage.getItem("orderMenu"));
    }
    download();
    // 주문 페이지의 시작 탭은 커피탭
    selectTab(1);
    if (orderMenu.length === 0) {
        // 로컬스토리지에서 불러온 메뉴가 0일 때
        document.getElementById('totalQuantitySpan').innerText = totalCount;
        document.getElementById('totalPriceSpan').innerText = `${totalPrice.toLocaleString()}원`;
    } else {
        // 로컬스토리지에서 불러온 메뉴가 있을 때 즉, 결제 페이지에서 뒤로가기로 왔을 경우
        orderMenu.forEach((e) => {
            viewSelectMenu(e);
        });
        orderInfoRefresh();
    }
}