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
console.log('displaymodalbutton', displayModal);
const addTask = document.getElementById('add-task');
console.log('addtask', addTask);

// Enseñar modal
function showModal() {
  console.log('Abriendo modal');
}

// Añadir nueva tarea
function addNewTask() {
  console.log('añadir tarea');
}

// Listener boton
displayModal.addEventListener('click', showModal);

addTask.addEventListener('click', addNewTask);