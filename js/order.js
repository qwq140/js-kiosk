let coffeeMenu = [];
let teaMenu = [];
let sandwichMenu = [];

const download = () => {
    coffeeMenu = [
        {
            id: 1,
            name: '아메리카노',
            price: 3000
        },
        {
            id: 2,
            name: '아이스 아메리카노',
            price: 3500
        },
        {
            id: 3,
            name: '카페라떼',
            price: 4000
        },
        {
            id: 4,
            name: '아이스 카페라떼',
            price: 4500
        },
        {
            id: 5,
            name: '바닐라빈라떼',
            price: 4500
        },
        {
            id: 6,
            name: '아이스 바닐라빈라떼',
            price: 5000
        },
        {
            id: 7,
            name: '캐러멜라떼',
            price: 4500
        },
        {
            id: 8,
            name: '아이스 캐러멜라떼',
            price: 5000
        },
        {
            id: 9,
            name: '카페모카',
            price: 4500
        },
        {
            id: 10,
            name: '아이스 카페모카',
            price: 5000
        },
    ];
    teaMenu = [
        {
            id: 11,
            name: '얼그레이',
            price: 3000
        },
        {
            id: 12,
            name: '아이스 얼그레이',
            price: 3500
        },
        {
            id: 13,
            name: '잉글리쉬브랙퍼스트',
            price: 3000
        },
        {
            id: 14,
            name: '아이스 잉글리쉬브랙퍼스트',
            price: 3500
        },
        {
            id: 15,
            name: '애플티',
            price: 3000
        },
        {
            id: 16,
            name: '아이스 애플티',
            price: 3500
        },
        {
            id: 17,
            name: '캐모마일',
            price: 3000
        },
        {
            id: 18,
            name: '아이스 캐모마일',
            price: 3500
        },
        {
            id: 19,
            name: '루이보스',
            price: 3000
        },
        {
            id: 20,
            name: '아이스 루이보스',
            price: 3500
        },
        {
            id: 21,
            name: '진저레몬',
            price: 3000
        },
        {
            id: 22,
            name: '아이스 진저레몬',
            price: 3500
        },
        {
            id: 23,
            name: '핫초콜릿',
            price: 3000
        },
        {
            id: 24,
            name: '아이스 초콜릿',
            price: 3500
        },
    ];
    sandwichMenu = [
        {
            id: 25,
            name: '잠봉뵈르',
            price: 6000
        },
        {
            id: 26,
            name: '치킨클럽샌드위치',
            price: 6500
        },
        {
            id: 27,
            name: 'BLT샌드위치',
            price: 6500
        }
    ];
}

const view = (list) => {
    let menuArea = document.getElementById('menu_area');
    while (menuArea.hasChildNodes()) {
        menuArea.removeChild(menuArea.firstChild);
    }
    list.forEach((e) => {
        let html = `<li class="menu" id="menu_${e.id}"><p class="menu_name"><span>${e.name}</span></p><p class="menu_price" id="price_${e.id}">${e.price.toLocaleString()} 원</p></li>`;
        menuArea.insertAdjacentHTML("beforeend", html);
    });
}

const selectTab = (tabNum) => {
    console.log(tabNum);
    switch (tabNum) {
        case 1:
            view(coffeeMenu);
            break;
        case 2:
            view(teaMenu);
            break;
        case 3:
            view(sandwichMenu);
            break;
    }
}

window.onload = () => {
    download();
    selectTab(1);
}