const groupNameField = document.getElementsByClassName('group-name')[0];
const groupDesciptionField = document.getElementsByClassName('group-description')[0];
const allowSearchCheck = document.getElementsByClassName('allow-search')[0];
const goalNameField = document.getElementsByClassName('goal-name')[0];
const amountSelect = document.getElementsByClassName('amount')[0];
const amountField = document.getElementsByClassName('input-amount')[0];
const amountUpButton = document.getElementsByClassName('up')[0];
const amountDownButton = document.getElementsByClassName('down')[0];
const unitField = document.getElementsByClassName('unit')[0];
const createButton = document.getElementsByClassName('create-btn')[0];

const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);
const userId = userData.id;

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

    let operationType = '더하기';
    if (amountSelect.value === 'minus') {
        operationType = '덜하기';
    } else {
        operationType = '변화 없음';
    }

    const groupData = {
        creator_id: userId,
        group_name: groupName,
        group_description: groupDescription,
        allow_search: allowSearch,
        goal_name: goalName,
        operation_type: operationType,
        member_count: 1,
        unit: unit
    };

    // 물 먹는 하마들
    //물을 많이 마시면 피부도 좋아지고 혈액순환도 잘 된대여
    //물 5잔 마시기
    //잔

    console.log(groupData);

    axios.post(`${BASE_URL}/groups`, groupData)
        .then(response => {
            console.log(response.data);
            window.open('../group', '_top');
        })
        .catch(error => {
            console.error(error);
        });

};
