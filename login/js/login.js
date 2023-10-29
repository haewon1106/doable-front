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

    axios.post('http://localhost:3000/auth/login', loginRequest)
    .then(response => {
        console.log(response)
        console.log('Registration successful:', response.data);
        const userData = response.data.user;
        console.log(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        console.log(JSON.parse(localStorage.getItem("user")))
        window.open('../main', '_top');
        setCookie('login', response.data.user.id, 10);

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