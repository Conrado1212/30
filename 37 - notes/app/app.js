let note =[];

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
    localStorage.setItem('notes', JSON.stringify(notes))
}



document.addEventListener('DOMContentLoaded', function(){


    document.getElementById('noteForm').addEventListener('submit', save());




    document.getElementById('noteDialog').addEventListener('click', function(e){
        if(e.target === this){
            closeDialog
        }
    })
})