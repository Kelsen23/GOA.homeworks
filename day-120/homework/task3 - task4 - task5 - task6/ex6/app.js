import { addTask, getTasks } from "./task.js";

const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText) {
    addTask(taskText);
    input.value = '';
    renderTasks();
  }
})

function renderTasks() {
  list.innerHTML = '';
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    list.appendChild(taskItem);
  })
}