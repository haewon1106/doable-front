function saveTodayDate() {
    // 현재 날짜
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환

    // 저장된 날짜
    const savedDate = localStorage.getItem('savedDate');

    // 다른 경우에만 저장
    if (!savedDate || savedDate !== dateString) {
        localStorage.setItem('savedDate', dateString);
        console.log('오늘 날짜를 저장했습니다.');

    } else {
        console.log('이미 오늘 날짜가 저장되어 있습니다.');
    }
}

// 함수 호출
saveTodayDate();



async function isDailyTodo(todoNo) {
    return await axios.get(`${BASE_URL}/todos/${todoNo}/daily`)
        .then(response => response.data.result)
        .catch(error => {
            console.log(error);
            return false;
        })
}