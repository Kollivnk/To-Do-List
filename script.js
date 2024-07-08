document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        addTask(taskText);
        document.getElementById('new-task').value = '';
    }
});

function addTask(text) {
    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '&#10003;';
    completeBtn.addEventListener('click', function() {
        completeTask(listItem);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&#128465;';
    deleteBtn.addEventListener('click', function() {
        deleteTask(listItem);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    listItem.appendChild(taskText);
    listItem.appendChild(actions);

    todoList.appendChild(listItem);

    updateTaskCount();
}

function completeTask(task) {
    const doneList = document.getElementById('done-list');
    task.querySelector('.task-text').style.textDecoration = 'line-through';
    doneList.appendChild(task);
    updateTaskCount();
}

function deleteTask(task) {
    task.remove();
    updateTaskCount();
}

function updateTaskCount() {
    const todoCount = document.getElementById('todo-list').children.length;
    const doneCount = document.getElementById('done-list').children.length;
    document.getElementById('todo-count').textContent = todoCount;
    document.getElementById('done-count').textContent = doneCount;
}
