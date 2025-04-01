import { todoArr } from "./creator.js"
import { isToday,isAfter,parseISO,isThisWeek,endOfWeek } from "date-fns";

export const projectDisplay = function(name){
    const newProject = document.createElement('button');
    newProject.setAttribute("data-project",name);
    newProject.classList.add('projectButton');
    newProject.textContent=name;
    document.querySelector('.project').appendChild(newProject);
};

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
        todoArr.splice(todoArr.indexOf(todo), 1);
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
    
    const filteredTasks= todoArr.filter(task=>task.project==prj);

    filteredTasks.forEach(task=>{
        taskDisplay(task);
    });
};

export const todayFilter = function(){
if(todoArr.length>0)
    document.querySelector('.taskContainer').innerHTML="";
    
    const todayTasks= todoArr.filter(task=>isToday(parseISO(task.duedate)));

    todayTasks.forEach(task=>{
        taskDisplay(task);
    });
}

export const weekFilter = function(){
    if(todoArr.length>0){
        document.querySelector('.taskContainer').innerHTML="";
    
        const weekTasks= todoArr.filter(task=>isThisWeek(parseISO(task.duedate),{weekStartsOn: 1}));

        weekTasks.forEach(task=>{
            taskDisplay(task);
        });
    }
}

export const laterFilter = function(){
    if(todoArr.length>0){
        document.querySelector('.taskContainer').innerHTML="";
    
        let weekEnd = endOfWeek(new Date(), {weekStartsOn: 1});
        const laterTasks= todoArr.filter(task=>isAfter(parseISO(task.duedate),weekEnd));

        laterTasks.forEach(task=>{
            taskDisplay(task);
        });
    }
}