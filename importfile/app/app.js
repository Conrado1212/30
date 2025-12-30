const file  = document.getElementById('file');
const fileName  = document.getElementById('fileName');
const cont  = document.getElementById('cont');


function testFile(file){
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();

        reader.onload = (e) =>{
            resolve(e.target.result)
        }

        reader.onerror = (error) =>{
            reject(error);
        }

        reader.readAsArrayBuffer(file);
    });
}


file.addEventListener('change',function(){
    const file = this.files[0];

    fileName.textContent = file ? this.files[0].name : 'no file';
        if(file){
            setTimeout(()=>{
                testFile(file).then((data) => {
                    //const  buffer   = new Uint8Array(data)
                   
                    console.log(base64(data),' adada');
                }).catch((e)=>{
                    console.error(e,' test');
                })

            },2000)
        }
})
function base64(data){
    let binary ='';
    const bytes = new Uint8Array(data)
    for(let i =0;i<bytes.length;i++){
        binary+= String.fromCharCode(bytes[i])
    }
    return btoa(binary)
}

cont.addEventListener('dragenter',()=>{
    cont.classList.add('alt-border');
    cont.classList.add('test');
})
cont.addEventListener('dragleave',()=>{
    cont.classList.remove('alt-border');
    cont.classList.remove('test');
})



cont.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
const reader = new FileReader();
  cont.addEventListener('drop',(e)=>{
      e.preventDefault();
      const data = e.dataTransfer.files[0];
      fileName.textContent = data.name;
      reader.onload = function(e){
          const div = document.createElement('div');
          div.textContent = e.target.result;
            cont.appendChild(div);
      }
     // reader.readAsDataURL(data);
     reader.readAsText(data);
     cont.classList.remove('alt-border');
     cont.classList.remove('test');
  })


  function drop(event){
    event.preventDefault();
    //dane pliku
  const data = event.dataTransfer.files[0];
   // const reader = new FileReader();
  //  reader.onload = function(e){
        fileName.textContent = data.name;
  //  }
}