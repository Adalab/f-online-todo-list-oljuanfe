'use strict';

console.log('>> Ready :)');

const today = new Date();
const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();
const dayOfWeek = today.getUTCDay();
console.log('hoy', today, day, month, year, dayOfWeek);

// selectores botones
const dateWrapper = document.getElementById('date-wrapper');
const displayModal = document.getElementById('display-modal-button');
const addTask = document.getElementById('add-task');
const toDoList = document.getElementById('toDoList');
const modal = document.getElementById('modal');
const toDoTask = document.getElementById('to-do-task');

let newTaskContent;
let allTasksToDo = [];



dateWrapper.innerHTML = day + ' ' + month + ' ' + year;
// Enseñar modal
function showModal() {
  modal.classList.remove('hidden');
}

// Añadir nueva tarea
function addNewTask() {
  modal.classList.add('hidden');
  toDoList.appendChild(createNewTask());
  toDoTask.value = '';
  console.log('añadiendo nueva tarea');
  addListenersToChecboxes();
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
  console.log('creando componente tarea');
  return newItem;
}

// Contenido nueva tarea
function addNewTaskContent(event) {
  console.log('añadiendo contenido');
  console.log('value', event.target.value);
  newTaskContent = event.target.value;
  console.log('contenid', newTaskContent);
}

// Manejo checkboxes, despues evento
function handleCheckboxes() {
  event.target.checked;
  console.log(event);
  event.target.parentElement.classList.toggle('task-done');
  console.log('todas tareas', allTasksToDo);
  for (const task of allTasksToDo) {
    if (event.currentTarget.nextSibling.data === task.task) {
      event.target.checked ? task.isDone = true : task.isDone = false;
    }
  }
  console.log('toditas las tareas', allTasksToDo);
  
}

// Listener boton
displayModal.addEventListener('click', showModal);

//Listener para gueardar el contenido de la nueva tarea
toDoTask.addEventListener('change', addNewTaskContent);

// Listener para pintar nueva tarea
addTask.addEventListener('click', addNewTask);
// addTask.addEventListener('enter', addNewTask);

// Añadir listeners a los checkboxes y manejar la lista de tareas que hacer
function addListenersToChecboxes() {
  // Listener Checkboxes
  const checkboxes = document.getElementsByClassName('checkbox');
  console.log(checkboxes);
  let individualTask;
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheckboxes);
    console.log('parent', checkbox.parentElement.lastChild);
    individualTask = {
      task: checkbox.nextSibling.data,
      isDone: false
    };
    console.log('individualtask', individualTask);
  }
  allTasksToDo.push(individualTask);
  console.log('allTasksToDo', allTasksToDo);
}
