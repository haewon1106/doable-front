const nameInput = document.getElementById('name-input');
const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const pwCheckInput = document.getElementById('pw-check');
const mailInput = document.getElementById('mail-id-input');
const mailDomainSelbox = document.getElementById('selbox');
const mailDomainInput = document.getElementById('selboxDirect');
const joinButton = document.getElementsByClassName('join-btn')[0];

let checkPW = () => {
    let pw = pwInput.value;
    let check = pwCheckInput.value;

    if (pw != check) {
        // TODO: 경고 문구 디자인하기
        alert('비밀번호가 같지 않습니다.');
    } 
};

pwCheckInput.onblur = checkPW;

joinButton.onclick = () => {

    let name = nameInput.value;
    let userid = idInput.value;
    let password = pwInput.value;
    let email = mailInput.value + '@' + mailDomainSelbox.value + 'com';

    const userData = {
        name: name,
        userid: userid,
        password: password,
        email: email
    };

    console.log(userData);

    axios.post('http://localhost:3000/auth/join', userData)
    .then(response => {
        console.log('Registration successful:', response.data);
        window.open('/login', '_top');
    })
    .catch(error => {
        console.error('Registration failed:', error);
    });
};