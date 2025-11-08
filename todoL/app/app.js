const todoL = [];
const add = document.getElementById("addTodo");
const data = document.getElementById("task");
const container = document.querySelector('.container');
const task = document.getElementById("task");

add.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log(e,"click");
    addTask();
    
});

function addTask(){
    const div = document.createElement("div");
    if(task.value.trim() === '')return;;

    div.classList.add('tasks');
    container.appendChild(div);

    const info = document.createElement("div");
    info.classList.add('info');

    const check = document.createElement("label");
    check.setAttribute("for", "check3");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "check3");

    const span = document.createElement("span");

    const p = document.createElement("p");

    p.classList.add("desc")
    p.textContent = "example";
}
// //tworzyc cos takiego  
// <div class="tasks">
//             <div class="info">
//             <label for="check1">
//                 <input type="checkbox" id="check1">
//                 <span></span>
//             </label>
//             <p class="desc">Build a todo app</p>
//         </div>
//         <div class="icon">
//             <i class="fa-solid fa-pen-to-square"></i>
//             <i class="fa-solid fa-trash"></i>
//         </div>
//     </div>

function removetask(){

}


function editTask(){
    
}