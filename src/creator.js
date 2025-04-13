import { renderAllProjects } from "./displayUpdater";

const state = {
    todoArr: [],
    prjArr: []
  };
  

const createTodo = function(name,duedate,important,project,description){
    let todo ={
        name: name,
        duedate: duedate,
        impStatus: important,
        project: project,
        description:description,
    }

    state.todoArr.push(todo);
    localStorage.setItem("todos",JSON.stringify(state.todoArr));
}

function createProject(name) {
    state.prjArr.push(name);
    localStorage.setItem("projects", JSON.stringify(state.prjArr));
    renderAllProjects(); // Refreshes the DOM
}

export {createTodo,createProject,state}