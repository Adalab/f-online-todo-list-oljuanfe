'use strict';

console.log('>> Ready :)');

// selectores elementos
// const dateWrapper = document.getElementById('date-wrapper');
const dayOfMonth = document.getElementById('day');
const dayFromWeek = document.getElementById('week-day');
const monthYear = document.getElementById('month-year');
const displayModal = document.getElementById('display-modal-button');
const addTask = document.getElementById('add-task');
const toDoList = document.getElementById('toDoList');
const modal = document.getElementById('modal');
const toDoTask = document.getElementById('to-do-task');

// Fecha
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const dayOfWeek = today.getDay();
const monthString = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dayString = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log('hoy', today, day, month, year, dayOfWeek);

let newTaskContent;


// Pintar fecha
dayOfMonth.innerHTML = day;
dayFromWeek.innerHTML = dayString[dayOfWeek];
monthYear.innerHTML = monthString[month] + ', ' + year;

// Recuperar localStorage
if (localStorage.length > 0) {
  if (localStorage.tasks !== null || localStorage.tasks !== undefined) {
    const storageRetrieved = localStorage.getItem('tasks');
    toDoList.innerHTML = storageRetrieved;
    addFunctionalityToChecboxes();
  }
}


// Enseñar modal
function showModal() {
  modal.classList.remove('hidden');
}

// Añadir nueva tarea
function addNewTask() {
  modal.classList.add('hidden');
  if (toDoTask.value !== '') {
    toDoList.appendChild(createNewTask());
  }
  addFunctionalityToChecboxes();
  toDoTask.value = '';
  newTaskContent = '';
}

// Crear nueva tarea
function createNewTask() {
  const newItem = document.createElement('li');
  const newLabel = document.createElement('label');
  const newCheckbox = document.createElement('input');
  const newCheckMark = document.createElement('span');
  newItem.setAttribute('class', 'to-do-list-item');
  newLabel.setAttribute('class', 'checkbox-label');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('class', 'checkbox');
  newCheckMark.setAttribute('class', 'checkmark');
  const newContentLabel = document.createTextNode(newTaskContent);
  newLabel.append(newCheckbox, newCheckMark, newContentLabel);
  newItem.appendChild(newLabel);
  return newItem;
}

// Contenido nueva tarea
function addNewTaskContent(event) {
  newTaskContent = event.target.value;
}

// Manejo checkboxes, despues evento
function handleCheckboxes() {
  event.target.parentElement.classList.toggle('task-done');
  sortTasks();
}

// Añadir listeners a los checkboxes y manejar la lista de tareas que hacer
function addFunctionalityToChecboxes() {
  // Listenr Checkboxes
  const checkboxes = document.getElementsByClassName('checkbox');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheckboxes);
  }
  sortTasks();
}

// Ordenar tareas
function sortTasks() {
  const itemToDo = document.querySelectorAll('.to-do-list-item');
  let changedItems = Array.from(itemToDo);
  const doneTasks = changedItems.filter((item) => item.firstElementChild.classList.value.includes('task-done'));
  const undoneTasks = changedItems.filter((item) => !item.firstElementChild.classList.value.includes('task-done'));
  const lastUndone = undoneTasks.pop();
  undoneTasks.unshift(lastUndone);
  changedItems = undoneTasks.concat(doneTasks);
  displayReorderTasks(changedItems);
}

// Pintar tareas ordenadas
function displayReorderTasks(changedItems) {
  for (const task of changedItems) {
    if ( task !== undefined) {
      toDoList.appendChild(task);
    }
  }
  localStorage.setItem('tasks',toDoList.innerHTML);
}

// Listener boton
displayModal.addEventListener('click', showModal);

//Listener para gueardar el contenido de la nueva tarea
toDoTask.addEventListener('change', addNewTaskContent);

// Listener para pintar nueva tarea
addTask.addEventListener('click', addNewTask);
