const welcomeComent = document.getElementsByClassName('welcome-comment')[0];
const remainingGoals = document.getElementsByClassName('remaining-goals')[0];
const dateDiv = document.getElementsByClassName('year')[0];
const dayList = document.getElementsByClassName('day');

const id = new URL(location.href).searchParams.get('id');

function setDate() {
    const now = new Date();
    const today = new Date();
    const currentDay = today.getDay(); 
  
    // 현재 날짜에서 일요일까지의 날짜 차이를 계산
    const daysUntilSunday = 0 - currentDay;
  
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

async function setInfo() {
    await axios.get(`http://localhost:8080/api/members/${id}`)
        .then((response) => { 
            console.log('Registration successful:', response.data);

            let user = response.data;
            welcomeComent.innerHTML = `안녕하세요, ${user.name}님`;
            remainingGoals.innerHTML = `오늘의 목표가 0개 남았습니다`; // TODO: 칼럼 추가해서 남은 투두 개수 계산하기

            welcomeComent
        }).catch((err) => {
            console.error(err);
        });
}

setInfo();
setDate();