'use strict';

console.log('>> Ready :)');

const today = new Date();
const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();
const dayOfWeek = today.getUTCDay();
console.log('hoy', today, day, month, year, dayOfWeek);

// selectores botones
const displayModal = document.getElementById('display-modal-button');
const addTask = document.getElementById('add-task');
const toDoList = document.getElementById('toDoList');
const modal = document.getElementById('modal');
const toDoTask = document.getElementById('to-do-task');
console.log('task', toDoTask);

let newTaskContent;


// Enseñar modal
function showModal() {
  console.log('Abriendo modal');
  modal.classList.remove('hidden');

}

// Añadir nueva tarea
function addNewTask() {
  console.log('añadir tarea');
  modal.classList.add('hidden');
  toDoList.appendChild(createNewTask());
}

// Crear nueva tarea
function createNewTask() {
  const newItem = document.createElement('li');
  const newLabel = document.createElement('label');
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type','checkbox');
  newCheckbox.setAttribute('class', 'checkbox');
  const newContentLabel = document.createTextNode(newTaskContent);
  newLabel.append(newCheckbox,newContentLabel);
  newItem.appendChild(newLabel);
  return newItem;
}

// Contenido nueva tarea
function addNewTaskContent(event) {
  console.log('añadiendo contenido');
  console.log('value', event.target.value);
  newTaskContent = event.target.value;
  console.log('contenid', newTaskContent);
}


// Listener boton
displayModal.addEventListener('click', showModal);

toDoTask.addEventListener('change', addNewTaskContent);

addTask.addEventListener('click', addNewTask);