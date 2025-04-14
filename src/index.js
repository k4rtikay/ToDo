import "./styles.css";
import { initializeModalListeners } from "./modalHandler.js";
import { renderAllTodos, todayFilter, weekFilter, laterFilter, renderAllProjects } from "./displayUpdater.js";
import { createProject,createTodo, state } from "./creator.js";

document.addEventListener('DOMContentLoaded',initializeModalListeners);


document.addEventListener('DOMContentLoaded',()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    state.todoArr = savedTodos;
    state.prjArr = JSON.parse(localStorage.getItem('projects')) || [];
    renderAllProjects()
})


document.querySelector('.submitProject').addEventListener('click',()=>{
    const projectTitle = document.querySelector('#projectTitle');
    createProject(projectTitle.value);
})

document.querySelector('.submitTask').addEventListener('click',()=>{
    const title = document.querySelector("#taskTitle").value;
    const date = document.querySelector("#DueDate").value;
    const important = document.querySelector("#important").checked;
    const project = document.querySelector("#selectProject").value;
    const description = document.querySelector("#description").value;

    createTodo(title,date,important,project,description);
    renderAllTodos(project);
})

document.querySelector('.project').addEventListener('click', (event) => {
    const button = event.target.closest('.projectButton');
    if (!button) return;

    const prj = button.getAttribute('data-project');
    renderAllTodos(prj);
});

document.querySelector('.today').addEventListener('click',()=>{
    todayFilter();
})

document.querySelector('.thisWeek').addEventListener('click',()=>{
    weekFilter();
})

document.querySelector('.later').addEventListener('click',()=>{
    laterFilter();
})