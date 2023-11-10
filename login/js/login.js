const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginButton = document.getElementsByClassName('login-btn')[0];

loginButton.onclick = () => {
    let userid = idInput.value;
    let password = pwInput.value;

    let loginRequest = {
        userid: userid,
        password: password
    };

    axios.post(`${BASE_URL}/auth/login`, loginRequest)
    .then(response => {
        console.log(response);
        const userData = response.data.user;
        setCookie('login', userData.user_no);
        console.log('Registration successful:', response.data);
        window.open('../main', '_top');

    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};

