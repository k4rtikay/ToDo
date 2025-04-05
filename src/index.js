import "./styles.css";
import { initializeModalListeners } from "./modalHandler.js";
import { taskfilter, todayFilter, weekFilter, laterFilter, renderAllProjects } from "./displayUpdater.js";
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

    createTodo(title,date,important,project);
    taskfilter(project);
})

document.querySelector('.project').addEventListener('click', (event) => {
    if (event.target.classList.contains('projectButton')) {
        const prj = event.target.getAttribute('data-project');
        taskfilter(prj);
    }
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