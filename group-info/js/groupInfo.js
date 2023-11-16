const ID = new URL(location.href).searchParams.get('id');

const groupNameDiv = document.getElementById('group-name');
const groupDescDiv = document.getElementById('group-desc');
const groupTodoDiv = document.getElementById('group-todo');
const groupMemberCountDiv = document.getElementById('group-member-count');
const joinButton = document.getElementsByClassName('join-btn')[0];

showGroupInfo();

async function showGroupInfo() {
    const group = await axios.get(`${BASE_URL}/groups/${ID}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
            return null;
        });

    if (!group) return;

    console.log(group);
    groupNameDiv.innerHTML = group.group_name;
    groupDescDiv.innerHTML = group.group_desc;
    groupTodoDiv.innerHTML = group.group_todo;
    groupMemberCountDiv.innerHTML = 1;
}