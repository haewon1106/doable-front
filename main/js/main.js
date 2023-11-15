const welcomeComent = document.getElementsByClassName('welcome-comment')[0];
const remainingGoals = document.getElementsByClassName('remaining-goals')[0];
const dateDiv = document.getElementsByClassName('year')[0];
const dayList = document.getElementsByClassName('day');
const todosDiv = document.getElementsByClassName('goals-btn')[0];
const categoriesDiv = document.getElementsByClassName('goals-container')[0];

showUserInfo();
setDate();
showUsersCategories();

function setDate() {
    const now = new Date();
    const today = new Date();
    const currentDay = today.getDay(); 
  
    // 현재 날짜에서 일요일까지의 날짜 차이를 계산
    const daysUntilSunday = 1 - currentDay;
  
    // 현재 날짜에 일요일까지의 날짜 차이를 더하여 일요일의 날짜를 계산
    today.setDate(today.getDate() + daysUntilSunday);
    console.log(today);

    dateDiv.innerHTML = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
    for (let i in dayList) { 
        if (now.getDate() == today.getDate() + parseInt(i)) {
            dayList[i].innerHTML = (today.getDate() + parseInt(i)) + '<div class="point-color"></div>';
            dayList[i].classList.add('point');

            continue;
        }
        dayList[i].innerHTML = today.getDate() + parseInt(i);
    }

    console.log('day', dayList[0].innerHTML)
}

function getLastDayOfMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; 

    const lastDay = new Date(year, month, 0);

    return lastDay.getDate(); 
}

async function showUserInfo() {
    await axios.get(`${BASE_URL}/users/${USER_NO}`)
        .then(response => { 
            const user = response.data;
            welcomeComent.innerHTML = `안녕하세요, ${user.user_name}님`;
            remainingGoals.innerHTML = `오늘의 목표가 0개 남았습니다`; // TODO: 칼럼 추가해서 남은 투두 개수 계산하기

            welcomeComent
        }).catch((err) => {
            console.error(err);
        });
}

async function showUsersTodos() {
    todosDiv.innerHTML = '';
    await axios.get(`${BASE_URL}/users/${USER_NO}/todos`)
        .then(response => {
            const dataList = response.data;
            for (let data of dataList) {
                console.log(data);
                const goalBox = document.createElement('div');
                goalBox.className = 'goal-box';

                const keywordBox = document.createElement('div');
                keywordBox.className = 'keyword-box';

                const keywordIcon = document.createElement('div');
                keywordIcon.className = 'keyword-icon';

                const keywordColor = document.createElement('div');
                keywordColor.className = 'keyword-color';
                keywordColor.style.backgroundColor = data.category.category_color;

                const keywordName = document.createElement('p');
                keywordName.className = 'keyword-name';
                keywordName.innerHTML = data.category.category_name;

                const dotIcon = document.createElement('i');
                dotIcon.classList.add('bx', 'bx-dots-vertical-rounded', 'dot-icon');

                const goal = document.createElement('goal');
                goal.className = 'goal';
                goal.innerHTML = data.todo_name;

                const modalContent = document.createElement('div');
                modalContent.className = 'modalContent';
                
                const correction= document.createElement('div');
                correction.className = 'correction';
                correction.innerHTML = '수정';

                const deleteDiv = document.createElement('div');
                deleteDiv.className = 'delete';
                deleteDiv.innerHTML = '삭제';

                keywordIcon.appendChild(keywordColor);
                keywordIcon.appendChild(keywordName);
                keywordBox.appendChild(keywordIcon);
                keywordBox.appendChild(dotIcon);
                modalContent.appendChild(correction);
                modalContent.appendChild(deleteDiv);
                goalBox.appendChild(keywordBox);
                goalBox.appendChild(goal);
                goalBox.appendChild(modalContent);
                todosDiv.appendChild(goalBox);

                modalContent.style.display = 'none';
                dotIcon.onclick = () => {
                    [...document.getElementsByClassName('modalContent')].forEach(e => {
                        e.style.display = 'none';
                    })
                    modalContent.style.display = 'flex';
                }
            }
        })
        .catch(err => {
            console.error(err);
        });

        categoriesDiv.appendChild(todosDiv);
}

async function showUsersCategories() {

    const dDay = document.createElement('p');
    dDay.className = 'd-day';
    dDay.innerHTML = 'D-DAY';
    categoriesDiv.innerHTML = '';
    categoriesDiv.appendChild(dDay);

    await axios.get(`${BASE_URL}/users/${USER_NO}/categories`)
        .then(response => {
            const dataList = response.data;
            for (let data of dataList) {
                console.log(data);
                const keywordContainer = document.createElement('div');
                keywordContainer.className = 'keyword-container';

                const keyword = document.createElement('div');
                keyword.className = 'keyword';

                const keywordColor = document.createElement('div');
                keywordColor.className = 'keyword-color';
                keywordColor.style.backgroundColor = data.category_color;

                const keywordName = document.createElement('p');
                keywordName.className = 'keyword-name';
                keywordName.innerHTML = data.category_name;

                keyword.appendChild(keywordColor);
                keyword.appendChild(keywordName);
                keywordContainer.appendChild(keyword);
                categoriesDiv.appendChild(keywordContainer);
            }

        })
        .catch(err => {
            console.error(err);
        });


    showUsersTodos();
}

