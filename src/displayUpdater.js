import { state } from "./creator.js"
import { isToday,isAfter,parseISO,isThisWeek,endOfWeek } from "date-fns";

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
        newProject.textContent = name;
        document.querySelector(".project").appendChild(newProject);
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
        localStorage.setItem("todos",JSON.stringify(todoArr));
        taskEntry.remove();
    })

    console.log(todo.impStatus);
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
    taskEntry.appendChild(dlt);

    document.querySelector('.taskContainer').appendChild(taskEntry);
};

export const taskfilter= function(prj){
    document.querySelector('.taskContainer').innerHTML="";
    
    const filteredTasks= state.todoArr.filter(task=>task.project==prj);

    filteredTasks.forEach(task=>{
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