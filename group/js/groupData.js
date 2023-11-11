const groupContainer = document.getElementsByClassName('group-container')[0];
const goalContainer = document.getElementsByClassName('goal-container')[0];
const todoNameDiv = document.getElementsByClassName('todo-name')[0];
const bestUserNameDiv = document.getElementsByClassName('best-username')[0];
const bestAmountDiv = document.getElementsByClassName('best-amount')[0];

showUsersGroups();

async function showUsersGroups() {
    groupContainer.innerHTML = '';
    const groups = await axios.get(`${BASE_URL}/users/${USER_NO}/groups`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return null;
        });

    showGroupsTodo(groups[0].id);

    for (let group of groups) {
        const groupBox = document.createElement('div');
        groupBox.className = 'group-box';

        const groupName = document.createElement('p');
        groupName.className = 'group-name';
        groupName.innerHTML = group.group_name;

        const groupMember = document.createElement('div');
        groupMember.className = 'group-member';

        const num = document.createElement('p');
        num.className = 'num';
        num.innerHTML = 1;

        const userIcon = document.createElement('i');
        userIcon.classList.add('bx');
        userIcon.classList.add('bx-user');

        groupMember.appendChild(num);
        groupMember.appendChild(userIcon);
        groupBox.appendChild(groupName);
        groupBox.appendChild(groupMember);
        groupContainer.appendChild(groupBox);

    }
}

async function showGroupsTodo(groupId) {
    const group = await axios.get(`${BASE_URL}/groups/${groupId}`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });

    todoNameDiv.innerHTML = group.goal_name;
    bestUserNameDiv.innerHTML = group.best_performer_name + '님,';
    bestAmountDiv.innerHTML = group.bestAmountDiv;

}