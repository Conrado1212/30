const btns = document.querySelectorAll('.cat button');
const btns2 = [...btns].slice(0,-1);
const article = document.querySelectorAll('.article-wrapper');
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


