
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function addTask(taskText) {
  const newTask = { text: taskText, completed: false };
  tasks.push(newTask);
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasks() {
  return tasks;
}