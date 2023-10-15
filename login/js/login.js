const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginButton = document.getElementsByClassName('login-btn')[0];

loginButton.onclick = () => {
    let memberId = idInput.value;
    let password = pwInput.value;

    let loginRequest = {
        memberId: memberId,
        password: password
    }

    axios.post('http://localhost:8080/api/auth/login', loginRequest)
    .then(response => {
        console.log('Registration successful:', response.data);
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};