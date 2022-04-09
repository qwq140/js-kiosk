let timer = setTimeout(() => {
    location.href = 'result_fail.html';
}, 60000);

const success = (method) => {
    switch (method) {
        case 'card':
            clearTimeout();
            location.href = 'result_success.html';
            break;
        case 'nfc':
            clearTimeout();
            location.href = 'result_success.html';
            break;
        case 'cash':
            clearTimeout();
            location.href = 'result_cash_success.html';
            break;
    }
}