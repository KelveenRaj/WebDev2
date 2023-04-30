const taskList = [];

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task-input');
  const newTask = newTaskInput.value;
  taskList.push(newTask);
  displayTaskList();
  newTaskInput.value = '';
});

function displayTaskList() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.innerHTML = '';
  taskList.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', () => {
      taskList.splice(index, 1);
      displayTaskList();
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.splice(index, 1);
      displayTaskList();
    });
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskListElement.appendChild(listItem);
  });
}