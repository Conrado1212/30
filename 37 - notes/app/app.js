let note =[];

function loadNotes(){
    const saveNotes = localStorage.getItem('notes');
    return saveNotes ? JSON.parse(saveNotes) : []
}


function openNote(){
    const dialog = document.getElementById('noteDialog');
    
    const noteTitle = document.getElementById('noteTitle');

    const noteContent = document.getElementById('noteContent');
    
    dialog.showModal();
    noteTitle.focus()
}

function closeDialog(){
  document.getElementById('noteDialog').close()
}




function save(event){
event.preventDefault()

const title  = document.getElementById('noteTitle').value.trim();
const area  = document.getElementById('noteContent').value.trim();

note.unshift({
    id: generateId(),
    title: title,
    note: area
})
saveNotes()
}

function generateId(){
    return Date.now().toLocaleString();
}

function saveNotes(){
    localStorage.setItem('notes', JSON.stringify(note))
}



document.addEventListener('DOMContentLoaded', function(){
    note = loadNotes()
    render()
    document.getElementById('noteForm').addEventListener('submit', save);




    document.getElementById('noteDialog').addEventListener('click', function(e){
        if(e.target === this){
            console.log('test this', this);
            closeDialog()
        }
    })
})


function render(){
    const notes = document.getElementById('container');

    if(note.length === 0){
        notes.innerHTML = `
        <div class="empty-state">
        <h2>No notes yest</h2>
        <p>Create your first note to get started</p>
        <button class="add-note-btn" onclick="openNote()">+ Add your first Note</button>
        </div>
        `
        return
    }else{
        notes.innerHTML = note.map(e=>
            `<div class="note-card">
            <h3 class="note-title">${e.title}</h3>
            <p class="note-content">${e.area}</p>
            </div>
            `
        ).join('')
        
    }
}