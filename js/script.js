//Variables
const taskInput = document.querySelector(".task-input input");
let todos = JSON.parse(localStorage.getItem("todo-list"));    // <-- We retrieve the value of the todos
const taskBox = document.querySelector(".task-box");

//Listeners
document.addEventListener("DOMContentLoaded", showTodo);

function showTodo(){
    if(todos){
        clearHTML();
        todos.forEach( (todo, id) => {   // <-- if there are two parameters the second one is an autoincrement value
            const li = document.createElement("li");
                li.classList.add("task"); 
                li.innerHTML = `
                    <div class="task__field">
                        <label for=""></label>
                        <input onclick="updatedStatus(this)" type="checkbox" name="" id="1">    <!-- this just makes reference to the same objet checkbox-->
                        <p>${todo.name}</p>
                    </div>
                    <div class="settings">
                        <i class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li class="uil uil-pen">Edit</li>
                            <li class="uil uil-trash">Delete</li>
                        </ul>
                    </div>       
            `;
            taskBox.prepend(li);
    
        });
    }
}

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key === "Enter" && userTask ){       
        if(!todos){
            todos = [];   // <-- If array todos doesn't exit then create an empty array
        }
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos)); // <-- Local storage only storage string so we need to convert the array into a string
        showTodo();
     }
     
});
function clearHTML(){
    while(taskBox.firstChild){  // <-- While there's something inside the ul remove the first child
        taskBox.removeChild(taskBox.firstChild);
    }
}

function updatedStatus(selectedTask){
    let taskName = selectedTask.parentElement.lastElementChild;
    console.log(taskName);
    if(selectedTask.checked){
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    }
    else{
        taskName.classList.remove("checked");
    }
}