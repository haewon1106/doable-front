const groupNameField = document.getElementsByClassName('group-name')[0];
const groupDesciptionField = document.getElementsByClassName('group-description')[0];
const allowSearchCheck = document.getElementsByClassName('allow-search')[0];
const goalNameField = document.getElementsByClassName('goal-name')[0];
const amountSelect = document.getElementsByClassName('amount')[0];
const amountField = document.getElementsByClassName('input-amount')[0];
const amountUpButton = document.getElementsByClassName('up')[0];
const amountDownButton = document.getElementsByClassName('down')[0];

amountUpButton.onclick = () => {
    // TODO: 숫자가 아닌 텍스트 검증하기
    if (amountField.value === "") {
        amountField.value = 0;
    }

    let amount = parseInt(amountField.value) + 1;
    amountField.value = amount;
};

amountDownButton.onclick = () => {
    // TODO: 숫자가 아닌 텍스트 검증하기
    if (amountField.value === "") {
        amountField.value = 0;
    }

    let amount = parseInt(amountField.value) - 1;
    if (amount < 0 ) {
        amount = 0;
    }
    amountField.value = amount;
};

