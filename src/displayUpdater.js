import { state } from "./creator.js"
import { isToday,isAfter,parseISO,isThisWeek,endOfWeek } from "date-fns";
import { taskEditor } from "./taskEditor.js";
import { openDeleteModal } from "./projectEditor.js";

export function renderAllProjects() {
    document.querySelector("#selectProject").innerHTML = "";
    document.querySelector(".project").innerHTML = "";

    state.prjArr.forEach(name => {
        // Option for select dropdown
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        document.querySelector("#selectProject").append(option);

        // Project button
        const newProject = document.createElement("button");
        newProject.setAttribute("data-project", name);
        newProject.classList.add("projectButton");
        document.querySelector(".project").appendChild(newProject);

        const projectName = document.createElement("span");
        projectName.textContent = name;
        newProject.appendChild(projectName);

        const dltProject = document.createElement('span');
        dltProject.classList.add('deleteProject');
        dltProject.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="deleteProject" width="16" height="16" fill="none" stroke="#ff3b30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6l-1 14H6L5 6"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
        <path d="M9 6V4h6v2"></path>
        </svg>`;
        newProject.appendChild(dltProject);
        dltProject.addEventListener('click', (event) => {
            const projectButton = dltProject.parentElement;
            const projectName = projectButton.getAttribute('data-project');
            openDeleteModal(projectName);
        });
        
    });
}


export const taskDisplay = function(todo){
    const taskEntry = document.createElement('div');
    taskEntry.classList.add('taskEntry');

    const newTask = document.createElement('div');
    newTask.textContent=todo.name;

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    checkbox.addEventListener('change',()=>{
        taskEntry.style.color = checkbox.checked ? "#B3B3BC" : "black";
    })

    taskEntry.appendChild(checkbox);

    const dlt = document.createElement('button');
    dlt.textContent='delete'
    dlt.addEventListener('click',()=>{
        state.todoArr.splice(state.todoArr.indexOf(todo), 1);
        localStorage.setItem("todos",JSON.stringify(state.todoArr));
        taskEntry.remove();
    })

    const edit = document.createElement('button');
    edit.textContent="edit";
    edit.addEventListener('click',()=>{
        console.log("taskEditor called for:", todo);
        taskEditor(todo);
    })

    
    if(todo.impStatus){
        const imp = document.createElement('button');
        imp.addEventListener('click',()=>{
            todo.impStatus = !(todo.impStatus);
        })

        imp.style.color='red';
        imp.style.borderColor='red';
        imp.textContent="Important";
        imp.classList.add("impStatus");
        taskEntry.append(imp);
    }

    taskEntry.appendChild(newTask);
    taskEntry.appendChild(edit);
    taskEntry.appendChild(dlt);

    document.querySelector('.taskContainer').appendChild(taskEntry);
};

export const renderAllTodos = function(project = null) {
    document.querySelector('.taskContainer').innerHTML = "";

    const filteredTasks = project
        ? state.todoArr.filter(task => task.project === project)
        : state.todoArr;

    filteredTasks.forEach(task => {
        taskDisplay(task);
    });
};

export const todayFilter = function(){
if(state.todoArr.length>0)
    document.querySelector('.taskContainer').innerHTML="";
    
    const todayTasks= state.todoArr.filter(task=>isToday(parseISO(task.duedate)));

    todayTasks.forEach(task=>{
        taskDisplay(task);
    });
}

export const weekFilter = function(){
    if(state.todoArr.length>0){
        document.querySelector('.taskContainer').innerHTML="";
    
        const weekTasks= state.todoArr.filter(task=>isThisWeek(parseISO(task.duedate),{weekStartsOn: 1}));

        weekTasks.forEach(task=>{
            taskDisplay(task);
        });
    }
}

export const laterFilter = function(){
    if(state.todoArr.length>0){
        document.querySelector('.taskContainer').innerHTML="";
    
        let weekEnd = endOfWeek(new Date(), {weekStartsOn: 1});
        const laterTasks= state.todoArr.filter(task=>isAfter(parseISO(task.duedate),weekEnd));

        laterTasks.forEach(task=>{
            taskDisplay(task);
        });
    }
}