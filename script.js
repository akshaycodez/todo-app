const inputtext = document.getElementById("inputtext")
const addbutton = document.getElementById("addtask")
const todolist = document.getElementById("listtodo")




function addtask() {
    const tasktext = inputtext.value.trim();


    if (tasktext == "") {
        return;
    }
    const li = document.createElement('li');
    li.textContent = tasktext;


    li.addEventListener('click', function () {
        li.classList.toggle("done");




    });
       
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        
        deleteBtn.addEventListener("click", (e) => {
              e.stopPropagation();
            li.remove(); // removes the task
        });

 li.appendChild(deleteBtn);
    todolist.appendChild(li);


    inputtext.value = '';
    inputtext.focus();


    

}
addbutton.addEventListener("click", addtask)
inputtext.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        addtask();
    }
})
window.onload = function () {
    inputtext.focus();
};

