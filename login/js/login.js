const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginButton = document.getElementsByClassName('login-btn')[0];

loginButton.onclick = () => {
    let memberId = idInput.value;
    let password = pwInput.value;

    let loginRequest = {
        memberId: memberId,
        password: password
    };

    axios.post('http://localhost:8080/api/auth/login', loginRequest)
    .then(response => {
        console.log('Registration successful:', response.data);
        window.open(`../main/?id=${response.data.memberNo}`, '_top');
        setCookie('login', response.data.memberNo, 10);
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};

function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
  
    var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
  }