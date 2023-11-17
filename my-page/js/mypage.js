const profileImageTag = document.getElementsByClassName('profile-image')[0];
const userNameTag = document.getElementsByClassName('user-name')[0];
const userIdTag = document.getElementsByClassName('user-id')[0];

showUserInfo();
async function showUserInfo() {
    const data = await axios.get(`${BASE_URL}/users/${USER_NO}`)
        .then(response => response.data)
        .catch(error => console.error(error))

    userNameTag.innerHTML = data.user_name;
    userIdTag.innerHTML = data.user_id;
}

$(document).ready(function () {
    $('.name-correction').hide();
    $('.pencil-icon').click(function () {
        $('.user-name').hide();
        $('.name-correction').css('display', 'flex');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.name-correction, .pencil-icon').length) {
            
            $('.user-name').show();
            $('.name-correction').hide();
        }
    });
});