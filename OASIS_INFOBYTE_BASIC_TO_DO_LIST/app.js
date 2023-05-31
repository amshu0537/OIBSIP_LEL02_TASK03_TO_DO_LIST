// Task list arrays
let tasks = [];
let completedTasks = [];

// Function to add a new task
function addTask() {
    const input = document.getElementById('task-input');
    const task = input.value.trim();

    if (task !== '') {
        tasks.push(task);
        input.value = '';
        input.focus();
        renderTasks();
    }
}

// Function to render the task lists
function renderTasks() {
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    // Clear the task lists
    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    // Render pending tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        pendingList.appendChild(li);
    });

    // Render completed tasks
    completedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteCompletedTask(${index})">Delete</button>
        `;
        li.classList.add('completed');
        completedList.appendChild(li);
    });
}

// Function to complete a task
function completeTask(index) {
    const task = tasks[index];
    tasks.splice(index, 1);
    completedTasks.push(task);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit the task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to delete a completed task
function deleteCompletedTask(index) {
    completedTasks.splice(index, 1);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
