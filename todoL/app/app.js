let todoL = [
    {   id: 1, text: "Zrobić zakupy", done: false },
        { id: 2, text: "Napisać raport", done: true }  
];
const add = document.getElementById("addTodo");
const container = document.querySelector('.container');
const task = document.getElementById("task");
const tasks = document.querySelectorAll('.tasks');
add.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log(e,"click");
    addTask();
    
});
const lastId = todoL.length >0 ? todoL[todoL.length-1].id+1 : 1;
function addTask(){
    const div = document.createElement("div");
    if(task.value.trim() === '')return;

    div.classList.add('tasks');
    container.appendChild(div);

    const info = document.createElement("div");
    info.classList.add('info');
    div.appendChild(info);

    const check = document.createElement("label");
    check.setAttribute("for", `check${lastId}`);
    info.appendChild(check);

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", lastId);
    check.appendChild(input);

    const span = document.createElement("span");
    check.appendChild(span);
    const p = document.createElement("p");

    p.classList.add("desc")
    p.textContent = task.value.trim();
    info.appendChild(p);

    const icon = document.createElement('div');
    icon.classList.add('icon');
    div.appendChild(icon);

    const edit = document.createElement('i');
    edit.classList.add('fa-solid', 'fa-pen-to-square');
    icon.appendChild(edit);

    const del = document.createElement('i');
    del.classList.add('fa-solid', 'fa-trash');
    icon.appendChild(del);
    addTodo(task.value.trim());
    task.value =''
}

function addTodo(text){
    const lastId = todoL.length >0 ? todoL[todoL.length-1].id : 0;
    const newTask = {
        id: lastId+1,
        text: text,
        done: false
    };
    todoL.push(newTask);   
}
container.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-trash')){
        console.log('click closet');
        const taskdiv = e.target.closest('.tasks');  
        const id = taskdiv.querySelector('.info input').getAttribute('id');
      //  console.log(id);
    //    console.log(todoL);
        removeTasks(id);
        taskdiv.remove();
    }
})

function removeTasks(id){
    const nid = Number(id);
 const index = todoL.findIndex(task=>task.id ==nid)
 console.log('index',index);
 if(index !== -1){
     todoL.splice(index,1)
 }
 
}
function editTask(){

}