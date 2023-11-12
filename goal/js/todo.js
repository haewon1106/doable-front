const goalNameField = document.getElementsByClassName('goal-name')[0];
const amountSelect = document.getElementsByClassName('amount')[0];
const amountField = document.getElementsByClassName('input-amount')[0];
const amountUpButton = document.getElementsByClassName('up')[0];
const amountDownButton = document.getElementsByClassName('down')[0];
const optionCheck = document.getElementById('check1');
const increaseAmountField = document.getElementById('increase-amount');
const startDateField = document.getElementById('start-date');
const endDateField = document.getElementById('end-date');
const unitField = document.getElementsByClassName('unit')[0];
const createButton = document.getElementsByClassName('create-btn')[0];

let categoryId = 1;

createButton.onclick = () => {
    const todoName = goalNameField.value;
    let operatingType = '더하기';
    if (amountSelect.value === 'minus') operatingType = '덜하기';
    else if (amountSelect.value === 'else') operatingType = '변화없음';
    const unit = unitField.value;
    const increaseDecreaseOption = optionCheck.value;
    const increaseAmount = increaseAmountField.value;
    const startDate = startDateField.value;
    const endDate = endDateField.value;

    let option = 0;
    if (increaseDecreaseOption === 'on') option = 1;
    const amount = amountField.value;
    // const request = {
    //     category: categoryId,
    //     todo_name: todoName,
    //     operating_type: operatingType,
    //     startingValue: amount,
    //     unit: unit,
    //     increase_decrease_option: option,
    //     increase_decrease_value: increaseAmount,
    //     start_date: startDate,
    //     end_date: endDate,
    //     completed: 0
    // }

    const request = {
        "category": 1,
        "todo_name": "유산소 운동",
        "operation_type": "더하기",
        "starting_value": 0,
        "unit": "분",
        "increase_decrease_option": 1,
        "increase_decrease_value": 30,
        "start_date": "2023-11-01",
        "end_date": "2023-11-30",
        "completed": 0
      }
      
    console.log(request);

    axios.post(`${BASE_URL}/todos/${USER_NO}`, request)
        .then(response => {
            console.log(response);

        })
        .catch(err => {
            console.error(err);
        })
}