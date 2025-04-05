const searchMenu = document.querySelector('#sidebar ul li input');
const bars = document.querySelector('.bars');
const iconSearch = document.querySelector('#sidebar ul li .fa-magnifying-glass');
const sidebar = document.getElementById('sidebar');


searchMenu.addEventListener('focus', ()=>{
    iconSearch.style.cssText = 'color: rgb(0,255,255);  transition: color .1s;';
});

searchMenu.addEventListener('blur', ()=>{
    iconSearch.style.color = 'var(--white-color)';
});


bars.addEventListener('click', ()=>{
    bars.classList.toggle('active');
    sidebar.classList.toggle('active');
});