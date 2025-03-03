const menu = document.querySelector('.menu');

const off = document.querySelector('.off-menu');


menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    off.classList.toggle('active');
})