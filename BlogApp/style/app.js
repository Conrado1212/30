const btns = document.querySelectorAll('.cat button');
const btns2 = [...btns].slice(0,-1);
console.log(btns2);
btns2.forEach(btn =>{
    btn.addEventListener('click',()=>{
        btns2.forEach(b =>b.classList.remove('active'));
        btn.classList.add('active');
    })
})
