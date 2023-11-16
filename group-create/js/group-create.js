const groupNameField = document.getElementsByClassName('group-name')[0];
const groupDesciptionField = document.getElementsByClassName('group-description')[0];
const allowSearchCheck = document.getElementsByClassName('allow-search')[0];
const goalNameField = document.getElementsByClassName('goal-name')[0];
const amountSelect = document.getElementsByClassName('amount')[0];
const amountField = document.getElementsByClassName('input-amount')[0];
// const amountUpButton = document.getElementsByClassName('up')[0];
// const amountDownButton = document.getElementsByClassName('down')[0];
const unitField = document.getElementsByClassName('unit')[0];
const createButton = document.getElementsByClassName('create-btn')[0];

// amountUpButton.onclick = () => {
//     // TODO: 숫자가 아닌 텍스트 검증하기
//     if (amountField.value === "") {
//         amountField.value = 0;
//     }

//     let amount = parseInt(amountField.value) + 1;
//     amountField.value = amount;
// };

// amountDownButton.onclick = () => {
//     // TODO: 숫자가 아닌 텍스트 검증하기
//     if (amountField.value === "") {
//         amountField.value = 0;
//     }

//     let amount = parseInt(amountField.value) - 1;
//     if (amount < 0 ) {
//         amount = 0;
//     }
//     amountField.value = amount;
// };

createButton.onclick = () => {
    // TODO: 유효성 검사하기
    let groupName = groupNameField.value;
    let groupDescription = groupDesciptionField.value;
    let allowSearch = 0;
    if (allowSearchCheck.checked) {
        allowSearch = 1;
    }
    let goalName = goalNameField.value;
    let unit = unitField.value;

    let operationType = 0;
    if (amountSelect.value === 'minus') {
        operationType = 1;
    }

    const groupData = {
        creator_no: USER_NO,
        group_name: groupName,
        group_desc: groupDescription,
        group_search: allowSearch,
        group_todo: goalName,
        group_option: operationType,
        group_unit: unit
    };

    console.log(groupData);

    axios.post(`${BASE_URL}/groups`, groupData)
        .then(response => {
            console.log(response.data);
            window.open('../group/', '_top');
        })
        .catch(error => {
            console.error(error);
        });

};
