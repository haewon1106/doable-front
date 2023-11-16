const myGroupContainer = document.getElementsByClassName('group-management-container')[0];

getMyGroups();

async function getMyGroups(q) {
    const results = await axios.get(
        `${BASE_URL}/users/${USER_NO}/groups`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return null;
        });

    myGroupContainer.innerHTML = '';
    for (let result of results) {
        const myGroup = document.createElement('div');
        myGroup.className = 'my-group';

        const myGroupGoalContainer = document.createElement('div');
        myGroupGoalContainer.className = 'my-group-goal-container';

        const myGroupName = document.createElement('div');
        myGroupName.className = 'my-group-name';
        myGroupName.innerHTML = result.group_name;

        const myGroupGoal = document.createElement('div');
        myGroupGoal.className = 'my-group-goal';
        myGroupGoal.innerHTML = result.group_todo;

        myGroupGoalContainer.appendChild(myGroupName);
        myGroupGoalContainer.appendChild(myGroupGoal);
        myGroup.appendChild(myGroupGoalContainer);

        const groupMember = document.createElement('div');
        groupMember.className = 'group-member';

        const num = document.createElement('p');
        num.className = 'num';
        const count = await getGroupMemberCount(result.group_no);
        num.innerHTML = count + "";

        const userIcon = document.createElement('i');
        userIcon.classList.add('bx', 'bx-user');

        groupMember.appendChild(num);
        groupMember.appendChild(userIcon);
        myGroup.appendChild(groupMember);

        myGroupContainer.appendChild(myGroup);

    };

}

async function getGroupMemberCount(groupNo) {
    const count = await axios.get(`${BASE_URL}/groups/${groupNo}/users`)
        .then(response => {
            return response.data.length;
        })
        .catch(error => {
            console.error(error);
            return [];
        })

    return count;
}