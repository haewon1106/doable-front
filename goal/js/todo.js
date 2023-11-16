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
            
            // 직접 입력 만들기
            const directOpiton = document.createElement('option');
            directOpiton.value = 'direct';
            directOpiton.innerHTML = '카테고리 만들기';

            selbox.appendChild(categoryOpiton);
            selbox.appendChild(directOpiton);
        })

        console.log(selbox)
    });
}