const searchMenu = document.querySelector('#sidebar ul li input');
const bars = document.querySelector('.bars');
const iconSearch = document.querySelector('#sidebar ul li .fa-magnifying-glass');
const sidebar = document.getElementById('sidebar');
 //pobieramy wszystki i z sidebara 
 const menuLinks = document.querySelectorAll('#sidebar li a i');


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
    if(sidebar.classList.contains('active')){
        menuLinks.forEach(el=>{
            console.log('before', el);
            if(el.classList.contains('activeMenu')){
                el.classList.remove('activeMenu');
            }
            console.log('after', el);
        });
    }
   
});
iconSearch.addEventListener('click', ()=>{
    console.log('Icon search clicked');
    sidebar.classList.toggle('active');
    bars.classList.toggle('active');
});



const header = document.getElementById('header');


//zmienna pozycji scrolla
let prevScrollPos = document.documentElement.scrollTop || window.scrollY;

window.addEventListener('scroll', () => {
    //aktualna pozycja skrolla
  let currentScrollPos = document.documentElement.scrollTop || window.scrollY;
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

const users = [
    { username: "test1", password: "test1"},
    { username: "test2", password: "test2"}
];

function singIn(username, password){
    const user = users.find(user=> user.username === username && user.password === password);
    if(user){
        console.log('Login successfully');
    }else{
        console.log('login failed');
    }
}
singIn('test1', 'test1');

document.addEventListener('DOMContentLoaded', ()=>{
    //dla kazdego i dodajemy nasluch
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click',(e)=>{
            e.preventDefault();
            // console.log('clicked', this);
            //najpier dla kazdego usuniecie klasy aktywnej 
            if(!sidebar.classList.contains('active')){
                menuLinks.forEach(el=>{
                    console.log('before', el);
                    if(el.classList.contains('activeMenu')){
                        el.classList.remove('activeMenu');
                    }
                    console.log('after', el);
                });
                 //po kliknieciu dodanie klasy
            e.target.classList.add('activeMenu');
            }
        });
       
    });
});

// menuLinks.addEventListener('click', ()=>{
//     console.log('testadadadad');
// })


