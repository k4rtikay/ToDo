import { state } from "./creator";
import { renderAllProjects, renderAllTodos, todayFilter } from "./displayUpdater";

export function openDeleteModal(prj){
    const dltModal = document.querySelector('.deleteModal')
    setTimeout(() => {
        dltModal.showModal();
      }, 0);

    const confirmDlt = document.querySelector('.confirmDelete')
    const cancelDlt = document.querySelector('.cancelDelete')

    confirmDlt.addEventListener('click',()=>{
        deleteProject(prj)
        dltModal.close();
        renderAllProjects();
        todayFilter();
    })

    cancelDlt.addEventListener('click',()=>{
        dltModal.close();
    })

}

function deleteProject(prj){
    const index = state.prjArr.indexOf(prj);
    if (index > -1) {
        state.prjArr.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(state.prjArr));
    }

    for (let i = state.todoArr.length - 1; i >= 0; i--) {
        if (state.todoArr[i].project === prj) {
            state.todoArr.splice(i, 1);
        }
    }
    localStorage.setItem("todos", JSON.stringify(state.todoArr));
    
}