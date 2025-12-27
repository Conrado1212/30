const btns = document.querySelectorAll('.cat button');
const btns2 = [...btns].slice(0,-1);
const article = document.querySelectorAll('.article-wrapper');
const searchBlog = document.getElementById('searchBlog');
const searchBtn = document.getElementById('searchBtn');
const bars = document.querySelectorAll('.bars'); 
const menuS = document.querySelectorAll('.menu');
const overlay = document.querySelector('.overlay');
const add = document.querySelector('#add');
console.log('article ',article);
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
  delBtn.addEventListener('click',(e)=>{
    const id = bar.parentElement.querySelector('.article').getAttribute('id');
    console.log('adadadad',id);
    e.preventDefault()
    const valueDel = document.querySelector('#valueDel').value.trim();
    console.log(valueDel);
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
  const confirm = document.querySelector('#confirm');
  const value = document.querySelector('#valueDel');
  const title = document.querySelector('.del-title');
  title.textContent = titleArt.textContent;
  confirm.textContent = 'Confirm';
  value.placeholder = 'Change title';
  const id = bar.parentElement.querySelector('.article').getAttribute('id');
  if(!document.querySelector('#descValue')){

    const newInput = document.createElement("textarea");
    const newInfomration = document.createElement("textarea");
    const label = document.createElement("label");
    const select = document.createElement("select");

    label.setAttribute('for','type');
    label.textContent = 'Change type';

    select.setAttribute('name', 'type');
    select.setAttribute('id', 'type');
    newInput.setAttribute('id','descValue');

    newInfomration.setAttribute('id','infoValue');

    newInput.placeholder = "Change desc...";

    newInfomration.placeholder = "Change information...";

     newInput.rows = 4; 

     newInfomration.rows = 4; 

     newInput.cols = 30;

     newInfomration.cols = 30;
    let value = ['Lifestyle','Startup','Technology','Finance'];
     overlay.querySelector('form').appendChild(newInput);
     overlay.querySelector('form').appendChild(newInfomration);
     overlay.querySelector('form').appendChild(label);
     overlay.querySelector('form').appendChild(select);
     for(let i =0;i<4;i++){
      const option = document.createElement("option");
      option.value = `${value[i]}`;
      option.textContent = `${value[i]}`;
      select.appendChild(option);
    }
  }
  /*dodac type po kliknieciu */
  const selecType = document.querySelector('#type');
  selecType.value = type.textContent;
  /*nasluch na update*/
  
  confirm.addEventListener('click',(e)=>{
    const dataUpd = {}

  if (valueDel.value.trim() !== '') {
    dataUpd.title = valueDel.value.trim(); 
    }

  if (descValue.value.trim() !== '') { 
    dataUpd.desc = descValue.value.trim(); 
  }
  
  dataUpd.type = selecType.value;
  
    console.table(dataUpd);
    e.preventDefault();
    updateBlogPage(id,dataUpd);
    setTimeout(closeInfo,100);
  })


  const close = document.querySelector('#close');
  close.addEventListener('click',()=>{
    overlay.style.display ='none';
 });
});
})
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


function closeInfo(){
  ['.overlay','.overlay2'].forEach(e=>{
      const modal = document.querySelector(e);
      if(modal && modal.style.display !== 'none'){
          modal.style.display = 'none';
      }
  });
  window.location.reload();
}
add.addEventListener('click',()=>{
  
})