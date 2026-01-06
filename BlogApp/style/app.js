const btns = document.querySelectorAll('.cat button');
const btns2 = [...btns].slice(0,-1);
const article = document.querySelectorAll('.article-wrapper');
const searchBlog = document.getElementById('searchBlog');
const searchBtn = document.getElementById('searchBtn');

const bars = document.querySelectorAll('.bars'); 
const menuS = document.querySelectorAll('.menu');
const overlay = document.querySelector('.overlay');
const add = document.querySelector('#add');
const type = ['Lifestyle','Startup','Technology','Finance'];
const labels = ['Title','Description','Information','File','Type'];
const newInput = document.createElement("textarea");
  const newInfomration = document.createElement("textarea");
  const label = document.createElement("label");
  const select = document.createElement("select");
  const confirm = document.querySelector("#confirm");

  const articles = document.querySelectorAll('.article');

  const commentAdd = document.querySelector('#commentAdd');
//console.log('article ',article);

console.log(btns2);
btns2.forEach(btn =>{
    btn.addEventListener('click',()=>{
        btns2.forEach(b =>b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category
        
        article.forEach(art=>{
        if(category === 'All'){
          return  art.style.display ='block'
        }
            (!category || art.dataset.type === category) ? art.style.display ='block' : art.style.display ='none'
                
        })

    })
})

let ddd =[];
if(searchBtn){
  searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let value = searchBlog.value.trim().toLowerCase();
   fetch('/blogs')
   .then(res=>res.json())
   .then(data=>{
       if(Array.isArray(data)){
           console.log('Test', data);
           ddd.push(data);
           console.log('dane z back', ddd);
       }else{
           console.log(data.message);
       }
   });
   article.forEach(art=>{
       const title = art.querySelector('h5').textContent.toLowerCase();
     if(title.includes(value)){
       art.style.display ='block'
     }else{
       art.style.display ='none'
     }
     })
});
}


/*toggle menu on article*/
bars.forEach(bar =>{
  bar.addEventListener('click', () => { 
    const titleArt = bar.parentElement.querySelector('.article h5');
    const type = bar.parentElement.querySelector('.article span');
   // console.log(titleArt);
    bar.classList.toggle('active'); 
  const menu = bar.querySelector('.menu');
  menu.classList.toggle('active');
 const del = menu.querySelector('#del');
 /*del blog page */
 del.addEventListener('click',()=>{
   overlay.style.display ='flex';
   const title = document.querySelector('.del-title');
  title.textContent = titleArt.textContent;
  const delBtn = document.querySelector('#confirm');
  console.log(delBtn.querySelector('span'));
 delBtn.querySelector('span').textContent = 'Delete';
  const valueDel = document.querySelector('#valueDel');
  valueDel.placeholder = 'Are you sure want to delete this blog page?';

/*del modal */
const delmodal = ['valueDel','confirm'];
const form = overlay.querySelector('form');

[...form.querySelectorAll('*')].forEach(el =>{

  if (document.querySelector(`#${delmodal[1]}`).contains(el)) return;

  if (delmodal.includes(el.id)) return;
   
  
  el.remove();
  
});

  delBtn.addEventListener('click',(e)=>{
    const id = bar.parentElement.querySelector('.article').getAttribute('id');
    console.log('adadadad',id);
    e.preventDefault()
    const valueDel = document.querySelector('#valueDel').value.trim();
   // console.log(valueDel);
    if(valueDel.toLowerCase() === 'confirm'){
      deleteBlogPage(id);
      closeInfo();
      window.location.reload();
    }else{
      title.textContent = 'Incorrect value bye 😂😂😂';
      setTimeout(closeInfo,1000);
    }
  });

   const close = document.querySelector('#close');
  // console.log(close);
   close.addEventListener('click',()=>{
     overlay.style.display ='none';
   });
 });

  /*update blog page */
 const upd = menu.querySelector('#upd');
 upd.addEventListener('click',(e)=>{
   e.preventDefault();
  overlay.style.display ='flex';
  document.querySelector('#preview').style.display ='block';
  const confirm = document.querySelector('#confirm');
  const value = document.querySelector('#valueDel');
  const title = document.querySelector('.del-title');
  title.textContent = titleArt.textContent;
  confirm.querySelector('span').textContent = 'Confirm';
  value.placeholder = 'Change title';
  const id = bar.parentElement.querySelector('.article').getAttribute('id');
  if(!document.querySelector('#descValue')){
    createForm('Change');
  }else{
    changeForm('Change');
  }
  /*dodac type po kliknieciu */
  const selecType = document.querySelector('#type');
  selecType.value = type.textContent;
  /*nasluch na update*/
  
  confirm.addEventListener('click',(e)=>{
    const data = buildFormData();
    e.preventDefault();
    updateBlogPage(id,data);
    setTimeout(closeInfo,100);
  })


  const close = document.querySelector('#close');
  close.addEventListener('click',()=>{
    overlay.style.display ='none';
 });
});

});
});




article.forEach(art =>{
art.addEventListener('mouseout',(e)=>{
  //console.log(e.target, 'test');
  if(art.contains(e.relatedTarget)) return;
  bars.forEach(bar => {
    bar.classList.remove('active')
    bar.querySelector('.menu').classList.remove('active');
  });
  
});
  
});





function deleteBlogPage(id){
  axios.delete(`http://localhost:3000/blog/${id}`)
  .then(response =>{
    console.log(`${response}`);
    //location.reload();
  })
  .catch(e =>{
    console.error('Error', e);
})
}

function updateBlogPage(id,updatedData){
  axios.put(`http://localhost:3000/blog/${id}`,updatedData)
  .then(response =>{
    console.log(`${response}`);
    //location.reload();
  })
  .catch(e =>{
    console.error('Error', e);
})
}


function addBlogPage(data){
  axios.post(`http://localhost:3000/new`, data,{
    headers:{
      "Content-Type": "multipart/form-data"
    }
  })
  .then(response =>{
    console.log(`${response}`);
    //location.reload();
  })
  .catch(e =>{
    console.error('Error', e);
    alert(e)
})
}
function addCommentToBlogPage(id,data){
  axios.put(`http://localhost:3000/blog/${id}/comment`, data,{
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(response =>{
    console.log(`${response}`);
    //location.reload();
  })
  .catch(e =>{
    console.error('Error', e);
    alert(e)
})
}

function closeInfo(){
  ['.overlay','.overlay2'].forEach(e=>{
      const modal = document.querySelector(e);
      if(modal && modal.style.display !== 'none'){
          modal.style.display = 'none';
      }
  });
  setTimeout(() => { window.location.reload(); }, 100);
}

/*add new blog page */
if(add){
add.addEventListener('click',()=>{
  overlay.style.display ='flex';
  document.querySelector('#preview').style.display = 'none';
  const title = document.querySelector('.del-title');
  const value = document.querySelector('#valueDel');
  
  confirm.querySelector('span').textContent = 'Add'

  value.placeholder = 'Add title...';
  title.textContent = 'Add new blog page';

  if(!document.querySelector('#descValue')){
    createForm('Add');
  }else{
    changeForm('Add');
  }
 

  confirm.addEventListener('click',(e)=>{
    e.preventDefault()
   const data = buildFormData();

   
    addBlogPage(data);
    setTimeout(closeInfo,100);

  });

  
  /*file nasluch */
  if(document.querySelector('#File')){
    document.querySelector('#File').addEventListener('change',function(){
      console.log('ddddd');
      const selectfile = this.files[0];
     console.log(selectfile);
      document.querySelector('.fileContainer span').textContent = selectfile ? this.files[0].name : 'No file';    
      document.querySelector('.fileContainer span').style.display = "block";
          if(selectfile){
              setTimeout(()=>{
                  testFile(selectfile).then((data) => {
                      //const  buffer   = new Uint8Array(data)
                     //console.log(data);
                      console.log(base64(data),' adada');
                  }).catch((e)=>{
                      console.error(e,' test');
                  })
    
              },1000)
          }
    });
    const cont = document.querySelector('.fileContainer');
    let counter = 0;
    cont.addEventListener('dragenter',()=>{
      console.log("enterrrrr");
      counter++;
      cont.classList.add('alt-border');
     // cont.classList.add('test');
    });
     cont.addEventListener('dragleave',()=>{
       counter--;
       if(counter===0){
        cont.classList.remove('alt-border');
       } 
       
     })
     cont.addEventListener('dragover', (event) => {
       event.preventDefault();
     });
    // const reader = new FileReader();
   cont.addEventListener('drop',(e)=>{
      e.preventDefault();
       const data = e.dataTransfer.files[0];
       testFile(data)
       console.log('data test', data);
       document.querySelector('.fileContainer span').textContent = data.name;
       document.querySelector('.fileContainer span').style.display = "block";
    //   reader.onload = function(e){
     //   document.querySelector('.fileContainer span').textContent = e.target.result;
    //  }
      // reader.readAsDataURL(data);
    //  reader.readAsText(data);
      cont.classList.remove('alt-border');
   });
  }


  /*close modal */
  const close = document.querySelector('#close');
 close.addEventListener('click',()=>{
  //  [...overlay.querySelectorAll('*')].forEach(el =>{
  //   if(el.value)el.value = '';
  //  });
  overlay.querySelector('form')?.reset();
  overlay.querySelector('.fileContainer span').textContent =''
  overlay.querySelector('.fileContainer span').style.display ="none";
  // setTimeout(()=>{
    overlay.style.display ='none';
  // },10000);
 });
});
}
function createForm(data){
  
   for(let i =0;i<labels.length;i++){
    const label = document.createElement("label");
    const textarea = document.createElement("textarea");
    const div = document.createElement("div");
    const span = document.createElement("span");

    label.setAttribute('for',labels[i]);
    label.textContent = `${labels[i]}`;
    if(label.getAttribute('for') === 'Title'){
      overlay.querySelector('form').insertBefore(label,document.querySelector('#valueDel'));
    }else if(label.getAttribute('for') === 'File'){
      div.setAttribute('class','fileContainer')
      overlay.querySelector('form').appendChild(div);
      div.appendChild(label);
      label.innerHTML ='File <i class="fa-solid fa-file-arrow-up" aria-hidden="true"></i>';
      div.appendChild(span);
    }else{
      overlay.querySelector('form').appendChild(label);
    }
    if(labels[i] === "Description") {
      textarea.setAttribute('id','descValue');
      textarea.placeholder = `${data} desc...`;
      textarea.rows = 4;
      textarea.cols = 30;
      overlay.querySelector("form").appendChild(textarea);
    }
    if(labels[i] === "Information") {
      textarea.setAttribute('id','infoValue');
      textarea.placeholder = `${data} information...`;
      textarea.rows = 8;
      textarea.cols = 30;
      overlay.querySelector("form").appendChild(textarea);
    }
    if(labels[i] === "File") {
      const input = document.createElement("input");
       input.setAttribute('id','File');
       input.setAttribute('class','file-input');
       input.setAttribute('type','file');
       input.setAttribute('name','image');
       input.setAttribute('accept','image/*');
       overlay.querySelector(`form label[for="${labels[i]}"`).appendChild(input);
    }
   
  }
     /*dropdown*/
     select.setAttribute('name', 'type');
     select.setAttribute('id', 'type');
   
     overlay.querySelector('form').appendChild(select);

  for(let i =0;i<type.length;i++){
   const option = document.createElement("option");
   option.value = `${type[i]}`;
   option.textContent = `${type[i]}`;
   select.appendChild(option);
 }

}

function changeForm(data){
   const newInput = document.querySelector('#descValue');
   const valueDel = document.querySelector('#valueDel');
   const newInfomration = document.querySelector('#infoValue');
 
   valueDel.placeholder = `${data} title...`;
   newInput.placeholder = `${data} desc...`;

   newInfomration.placeholder = `${data} information...`;
}



/*fileReader*/
function testFile(file){
  // return new Promise((resolve, reject)=>{
  //     const reader = new FileReader();

  //     reader.onload = (e) =>{
  //         resolve(e.target.result)
  //     }

  //     reader.onerror = (error) =>{
  //         reject(error);
  //     }

  //     reader.readAsArrayBuffer(file);
  // });
  console.log('testfile', file.arrayBuffer());
  return file.arrayBuffer();
}


 function base64(data){
 // const buffer = await data.arrayBuffer();
  let binary ='';
  const bytes = new Uint8Array(data)

  //const chunk = 0x8000;

  for(let i =0;i<bytes.length;i++){
  //    binary+= String.fromCharCode(...bytes.subarray(i, i+chunk));
  binary+= String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

function drop(event){
  event.preventDefault();
const data = event.dataTransfer.files[0];
      fileName.textContent = data.name;

}
//zmienic na funkcje aby bylo lepiej  const data = buildBlogFormData();

function buildFormData(){
  const data = new FormData();
  if (valueDel.value.trim() !== '') {
    data.append("title", valueDel.value.trim());
    }

  if (document.querySelector('#descValue').value.trim() !== '') { 
    data.append("desc",document.querySelector('#descValue').value.trim()); 
  }
  if (document.querySelector('#infoValue').value.trim() !== '') { 
    data.append("information",document.querySelector('#infoValue').value.trim()); 
  }
  if (document.querySelector('#File').value.trim() !== '') { 
    data.append("image",document.querySelector('#File').files[0]); 
  }  

  data.append("type",document.querySelector('#type').value);

  return data;
}



if(articles){
  articles.forEach(art =>{
    art.addEventListener('click',()=>{
      window.location.href =`http://localhost:3000/blogPage/${art.getAttribute('id')}`
    })
  })
}

if(commentAdd){
  const commentSubmit = document.querySelector('#commentSubmit');
  commentSubmit.addEventListener('click',()=>{
    const id = document.querySelector('.article-blog').getAttribute('id');
  
   const data = {};
    data.userName = commentAdd.querySelector('input').value.trim();
   
    data.comment = commentAdd.querySelector('textarea').value.trim()
   
    console.log(data);
    addCommentToBlogPage(id,data);
  })
}


/*homepage*/
const home = document.querySelector('.title-logo');
if(home){
  home.addEventListener('click',()=>{
    window.location.href =`http://localhost:3000/`;
  })
}