import { state } from "./creator";
import { openEditModal } from "./modalHandler";
import { renderAllTodos } from "./displayUpdater";

let taskBeingEdited = null;

export function taskEditor(todo){
    taskBeingEdited = todo;

    populateProjectDropdown();

    console.log(state.prjArr)
    document.getElementById("editTitle").value = todo.name;
    document.getElementById("editDueDate").value = todo.duedate || "";
    document.getElementById("editDescription").value = todo.description || "";
    document.getElementById("editImportant").checked = todo.impStatus || false;
    document.getElementById("editSelectProject").value = todo.project || "";
    console.log(todo.project)


    setTimeout(() => {
        document.querySelector('.editModal').showModal();
      }, 0);
      
}

const editForm = document.getElementById("editForm");
if (editForm) {
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!taskBeingEdited) return;

        taskBeingEdited.name = document.getElementById("editTitle").value;
        taskBeingEdited.duedate = document.getElementById("editDueDate").value;
        taskBeingEdited.description = document.getElementById("editDescription").value;
        taskBeingEdited.impStatus = document.getElementById("editImportant").checked;
        taskBeingEdited.project = document.getElementById("editSelectProject").value;

        localStorage.setItem("todos", JSON.stringify(state.todoArr));

        document.querySelector(".editModal").close();

        //renderAllTodos(taskBeingEdited.project);
    });
}


function populateProjectDropdown() {
    const select = document.getElementById("editSelectProject");
    const projects = state.prjArr;
  
    select.innerHTML = ""; // clear old options
    projects.forEach(project => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      select.appendChild(option);
    });
  }