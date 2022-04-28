const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const btnFirstMove = document.querySelector('#first_move_btn');

btnOpenPopup.addEventListener('click', () => {
    modal.classList.toggle('show');

    if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.toggle('show');

        if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    }
});

btnFirstMove.addEventListener('click', () => {
   localStorage.setItem('orderMenu', '');
   location.href = 'index.html';
});


window.onload = () => {
    let orderMenu = [];
    orderMenu = JSON.parse(localStorage.getItem("orderMenu"));
    console.log(orderMenu);
    let now = new Date();
    let receiptDate = document.getElementById('receipt_date');
    console.log(receiptDate);
    receiptDate.innerText = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
    let receiptTotal = document.getElementById('receipt_total');
    let totalPrice = 0;
    orderMenu.forEach(e => {
        let html = `<div class="receipt__list-row">
                    <div class="receipt__item">${e.name} X ${e.count}</div>
                    <div class="receipt__cost">${(e.price * e.count).toLocaleString()}원</div>
                </div>`;
        totalPrice = totalPrice + e.price * e.count;
        receiptTotal.insertAdjacentHTML('beforebegin', html);
    });
    let totalPriceDom = document.getElementById('total_price');
    totalPriceDom.innerText = `${totalPrice.toLocaleString()}원`
}