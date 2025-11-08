let todoL = [
    {   id: 1, text: "Zrobić zakupy", done: false },
        { id: 2, text: "Napisać raport", done: true }  
];
const add = document.getElementById("addTodo");
const container = document.querySelector('.container');
const task = document.getElementById("task");
const tasks = document.querySelectorAll('.tasks');
const taskcount = document.getElementById('taskcount');
const done = document.getElementById('done');
const cancel = document.getElementById('cancel');
add.addEventListener('click',(e)=>{
    e.preventDefault();
   
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
    countTask();
}
container.addEventListener('click',(e) =>{
    const taskdiv = e.target.closest('.tasks');  
    if(!taskdiv)return;

    const id = taskdiv.querySelector('.info input').getAttribute('id');
    if(e.target.classList.contains('fa-trash')){
        removeTasks(id);
        taskdiv.remove();
    }
    if(e.target.tagName === 'SPAN'){      
        markAsComplete(id)
    }
});


function removeTasks(id){
    const nid = Number(id);
 const index = todoL.findIndex(task=>task.id ==nid)
 console.log('index',index);
 if(index !== -1){
     todoL.splice(index,1);
     countTask();
 }
 
}
function editTask(id,text){
    const nid = Number(id);
    const task = todoL.find(task=>task.id ==nid);
    if(task){
        task.text = text
    //    task.done = 'cos'
    }
}
function markAsComplete(id){
    const nid = Number(id);
    const task = todoL.find(task=>task.id ==nid);
    if(task){
        task.done = !task.done;
        complete()
    }else{
       console.log("Id was not found: ", nid);
    }
}
function countTask(){
    taskcount.textContent = todoL.length
}
countTask();


function complete(){
    count = 0;
   todoL.forEach(el =>{
       if(el.done === true){
           count++;
       }
   })
   done.textContent = `${count}/`;
}
complete()
if(cancel){
    cancel.addEventListener('click',()=>{
        document.querySelector(".overlay").style.display = "none";
    })
}