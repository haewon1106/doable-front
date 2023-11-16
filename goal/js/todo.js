// const goalNameField = document.getElementsByClassName('goal-name')[0];
// const amountSelect = document.getElementsByClassName('amount')[0];
// const amountField = document.getElementsByClassName('input-amount')[0];
// const amountUpButton = document.getElementsByClassName('up')[0];
// const amountDownButton = document.getElementsByClassName('down')[0];
// const optionCheck = document.getElementById('check1');
// const increaseAmountField = document.getElementById('increase-amount');
// const startDateField = document.getElementById('start-date');
// const endDateField = document.getElementById('end-date');
// const unitField = document.getElementsByClassName('unit')[0];


// 옵션 동적으로 추가하기
const categorySelBox = [...document.getElementsByClassName('category')];
const categoryColors = [...document.getElementsByClassName('category-color')];
const categoryFields = [...document.getElementsByClassName('selboxDirect')];

showUsersCategory();

async function showUsersCategory() {
    // 초기화
    categorySelBox.forEach(e => {
        e.innerHTML = '';
    });

    const results = await axios.get(`${BASE_URL}/users/${USER_NO}/categories`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return [];
        });

    console.log(results);
    categorySelBox.forEach((selbox, i) => {
        results.forEach(result => {
            // 옵션 만들기
            const categoryOpiton = document.createElement('option');
            categoryOpiton.innerHTML = result.category_name;
            categoryOpiton.value = result.category_no;

            // 배경색 적용
            categoryColors[i].style.backgroudColor = result.category_color;
            selbox.appendChild(categoryOpiton);
        });

        // 직접 입력 만들기
        const directOpiton = document.createElement('option');
        directOpiton.value = 'direct';
        directOpiton.innerHTML = '카테고리 만들기';
        selbox.appendChild(directOpiton);
    });
}

// 카테고리 이벤트
categorySelBox.forEach(selbox => {

    // 바뀌었을 때
    selbox.onchange = () => {
        console.log(selbox.value);
        if (selbox.value == 'direct') {
            selbox.onkeydown = e => {
                console.log(e);
            }
        }
    }
});

categoryFields.forEach((field, i) => {
    field.onkeydown = e => {
        if (e.keyCode === 13) {
            const name = field.value;
            const color = categoryColors[i].style.backgroudColor;
            createPost(color, name);
        }
    }
});

function createPost(color, name) {
    const request = {
        user_no: USER_NO,
        category_color: color,
        category_name: name
    };

    axios.post(`${BASE_URL}/categories`, request)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}


// 하루 투두 만들기
const onedayTodoButton = document.getElementById('oneday-button');
const onedayField = document.getElementById('oneday-field');

onedayTodoButton.onclick = () => {
    const name = onedayField.value.trim();
    if (name.length === 0) return;
    const categoryNo = getSelectedCategory(0);
    const request = {
        user_no: USER_NO,
        category_no: categoryNo,
        todo_name: name
    }

    console.log(request);
    axios.post(`${BASE_URL}/todos`, request)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        })
} 

function getSelectedCategory(id){
    console.log(categorySelBox[id].value);
    return categorySelBox[id].value;
}

// 매일 투두 만들기
const dailyButton = document.getElementById('daily-button');
const dailyField = document.getElementById('daily-field');
const dailyStartDate = document.getElementsByClassName('start-date')[0];
const dailyEndDate = document.getElementsByClassName('end-date')[0];

dailyButton.onclick = () => {
    const name = dailyField.value.trim();
    if (name.length === 0) return;

    const categoryNo = getSelectedCategory(0);

    const startDate = dailyStartDate.value;
    const endDate = dailyEndDate.value;

    const request = {
        user_no: USER_NO,
        category_no: categoryNo,
        todo_name: name,
        todo_startdate: startDate,
        todo_enddate: endDate
    };

    console.log(request);

    axios.post(`${BASE_URL}/todos/daily`, request)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
}
