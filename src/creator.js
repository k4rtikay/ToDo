
let todoArr = [];

const createTodo = function(name,duedate,important,project){
    let todo ={
        name: name,
        duedate: duedate,
        impStatus: important,
        project: project
    }

    todoArr.push(todo);
}

const createProject = function(name){
    const option = document.createElement('option');
    option.value=name;
    option.textContent=name;
    document.querySelector("#selectProject").append(option);
}

export {createTodo,createProject,todoArr}