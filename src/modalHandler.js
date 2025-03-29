
function initializeModalListeners() { 
    document.querySelector('.addProject').addEventListener('click', (e) => {
        e.stopPropagation(); //prevents the global click event from closing it
        document.querySelector('.ProjectModal').showModal();
    });

    document.querySelector('.addTask').addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.TaskModal').showModal();
    });

    document.addEventListener("click", (e) => {
        const openDialog = document.querySelector("dialog[open]");
        if (!openDialog) return;

        const { left, right, top, bottom } = openDialog.getBoundingClientRect();
        if (e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom) {
            openDialog.close();
        }
    });

    document.querySelector('.ProjectModal form').addEventListener('submit', (e) => {
        if (!e.target.checkValidity()) return; // Prevents closing if form is invalid
        e.preventDefault(); 
        document.querySelector('.ProjectModal').close();
    });
    
    document.querySelector('.TaskModal form').addEventListener('submit', (e) => {
        if (!e.target.checkValidity()) return; // Prevents closing if form is invalid
        e.preventDefault();
        document.querySelector('.TaskModal').close();
    });

}

export { initializeModalListeners };
