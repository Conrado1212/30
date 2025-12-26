const btns = document.querySelectorAll('.cat button');
const btns2 = [...btns].slice(0,-1);
const article = document.querySelectorAll('.article-wrapper');
const searchBlog = document.getElementById('searchBlog');
const searchBtn = document.getElementById('searchBtn');
const bars = document.querySelectorAll('.bars'); 
const menuS = document.querySelectorAll('.menu');
const overlay = document.querySelector('.overlay');
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
    bar.classList.toggle('active'); 
  const menu = bar.querySelector('.menu');
  menu.classList.toggle('active');
 const del = menu.querySelector('#del');
 del.addEventListener('click',()=>{
   overlay.style.display ='flex';
   const close = document.querySelector('#close');
   console.log(close);
   close.addEventListener('click',()=>{
     overlay.style.display ='none';
   });
 })
})
});



article.forEach(art =>{
art.addEventListener('mouseout',(e)=>{
  console.log(e.target, 'test');
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