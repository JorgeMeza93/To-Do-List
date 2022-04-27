//Variables
const taskInput = document.querySelector(".task-input input");
let todos = JSON.parse(localStorage.getItem("todo-list"));    // <-- We retrieve the value of the todos


//Listeners
document.addEventListener("DOMContentLoaded", showTodo);

function showTodo(){
    todos.forEach( (todo, id) => {   // <-- if there are two parameters the second one is an autoincrement value
        
    
    });
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
function saludar(){
    console.log("Y se durmió, como estás");
}