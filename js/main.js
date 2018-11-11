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
let allTasksToDo = [];


// Enseñar fecha
// dateWrapper.innerHTML = day + ' ' + month + ' ' + year;
dayOfMonth.innerHTML = day;
dayFromWeek.innerHTML = dayString[dayOfWeek];
monthYear.innerHTML = monthString[month] + ', ' + year;


// Enseñar modal
function showModal() {
  modal.classList.remove('hidden');
  console.log('enseñando modal');
}

// Añadir nueva tarea
function addNewTask() {
  modal.classList.add('hidden');
  if (toDoTask.value !== '') {
    toDoList.appendChild(createNewTask());
    
  }
  console.log('añadiendo nueva tarea');
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
  newCheckbox.setAttribute('type','checkbox');
  newCheckbox.setAttribute('class', 'checkbox');
  newCheckMark.setAttribute('class', 'checkmark');
  const newContentLabel = document.createTextNode(newTaskContent);
  newLabel.append(newCheckbox, newCheckMark, newContentLabel);
  newItem.appendChild(newLabel);
  console.log('creando componente tarea');
  return newItem;
}

// Contenido nueva tarea
function addNewTaskContent(event) {
  newTaskContent = event.target.value;
}

// Manejo checkboxes, despues evento
function handleCheckboxes() {
  console.log('event', event);
  event.target.checked;
  event.target.parentElement.classList.toggle('task-done');
  console.log('todas tareas', allTasksToDo);
  for (const task of allTasksToDo) {
    if (event.currentTarget.parentElement.lastChild.data === task.task) {
      event.target.checked ? task.isDone = true : task.isDone = false;
    }
  }
  console.log('toditas las tareas', allTasksToDo);
}

// Añadir listeners a los checkboxes y manejar la lista de tareas que hacer
function addFunctionalityToChecboxes() {
  // Listenr Checkboxes
  const checkboxes = document.getElementsByClassName('checkbox');
  let individualTask;
  console.log(checkboxes);
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheckboxes);
    console.log('checkboc',checkbox);
    individualTask = {
      task: checkbox.parentElement.lastChild.data,
      isDone: false
    };
    console.log('individualtask', individualTask);
    console.log('individualtask', individualTask);
  }
  allTasksToDo.push(individualTask);
  console.log('allTasksToDo', allTasksToDo);
  sortTasks();
  console.log('ordenadas', allTasksToDo);
}

// Ordenar tareas
function sortTasks() {
  console.log('ordenando');

}

// Listener boton
displayModal.addEventListener('click', showModal);

//Listener para gueardar el contenido de la nueva tarea
toDoTask.addEventListener('change', addNewTaskContent);

// Listener para pintar nueva tarea
addTask.addEventListener('click', addNewTask);
// addTask.addEventListener('enter', addNewTask);
