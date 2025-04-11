const searchMenu = document.querySelector('#sidebar ul li input');
const bars = document.querySelector('.bars');
const iconSearch = document.querySelector('#sidebar ul li .fa-magnifying-glass');
const sidebar = document.getElementById('sidebar');



searchMenu.addEventListener('focus', ()=>{
    iconSearch.style.cssText = 'color: rgb(0,255,255);  transition: color .1s;';
});

searchMenu.addEventListener('blur', (e)=>{
    console.log('BLur is active:', e.target);
    if(!searchMenu.matches(':hover')&& !iconSearch.matches(':hover')){
        console.log('hovver not detected');
        iconSearch.style.color = 'var(--white-color)';
    }
});

iconSearch.addEventListener('mouseenter', (e)=>{
    console.log('Hover added:', e.target);
    iconSearch.style.cssText = 'color: rgb(0,255,255);';
});
iconSearch.addEventListener('mouseleave', (e)=>{
    console.log('Hover leave:', e.target);
    iconSearch.style.cssText = 'color: var(--white-color);';
});

bars.addEventListener('click', ()=>{
    console.log('Bars clicked');
    bars.classList.toggle('active');
   // bars.children[0].style.color = "rgb(0, 255, 255)"
    sidebar.classList.toggle('active');
});
iconSearch.addEventListener('click', ()=>{
    console.log('Icon search clicked');
    sidebar.classList.toggle('active');
    bars.classList.toggle('active');
});



const header = document.getElementById('header');


//zmienna pozycji scrolla
let prevScrollPos = document.documentElement.scrollTop || window.pageYOffset;

window.addEventListener('scroll', () => {
    //aktualna pozycja skrolla
  let currentScrollPos = document.documentElement.scrollTop || window.pageYOffset;
//check pozycji srcoplla
  if (prevScrollPos > currentScrollPos) {
   
    header.style.opacity = '1';
  } else {
   
    header.style.opacity = '0';
  }
  //akutalizacja pozycji scrolla
  prevScrollPos = currentScrollPos; 
  console.log('Aktualna pozycja scrolla:', currentScrollPos);
});




