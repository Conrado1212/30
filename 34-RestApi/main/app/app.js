//body
const body = document.querySelector('body');
//search menu
const searchMenu = document.querySelector('#sidebar ul li input');
//barsy x =
const bars = document.querySelector('.bars');
//szukajka 
const iconSearch = document.querySelector('#sidebar ul li .fa-magnifying-glass');
//sidebar
const sidebar = document.getElementById('sidebar');
 //pobieramy wszystki i z sidebara 
 const menuLinks = document.querySelectorAll('#sidebar li a');
//wysztkie li 
//sciezak url
 const path = location.pathname;
 //linki
const links = document.querySelectorAll('#sidebar li a');
//mode
const mode = document.querySelectorAll('.moon-sun i');

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
  //  if(sidebar.classList.contains('active')){
   //     menuLinks.forEach(el=>{
         //   console.log('before', el);
      //   const parentLi = el.closest('li a');
         //   if(el.classList.contains('activeMenu')){
         //       el.classList.remove('activeMenu');
              
                //dodanie do li od dziecka do parenta 
             //  parentLi.classList.add('activeMenu');
        //    }
         //   console.log('after', el);
     //   });
  //  }
   
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
    //dodanie zmiennej do sessionstorage
    const savedLi = sessionStorage.getItem("activeLi");
    //sprawdzenie zmiennej czy isteniej po przeladowaniu strony

    menuLinks.forEach(el =>el.classList.remove('activeMenu'));
    if(savedLi !== null && menuLinks[savedLi]){
        //jesli tak ddoanie klasy activeMenu
        menuLinks[savedLi].classList.add("activeMenu");
        console.log('po zaladowniu ',menuLinks[savedLi]);
    }


    if(window.location.pathname.includes('index.html')){
        menuLinks.forEach(el => el.classList.remove('activeMenu'));
        menuLinks[0].classList.add('activeMenu');
        sessionStorage.setItem('activeLi', 0);
    }
    //dla kazdego i dodajemy nasluch
    menuLinks.forEach((menuLink, index) => {
        menuLink.addEventListener('click',(e)=>{
            e.preventDefault();
            // console.log('clicked', this);
            //najpier dla kazdego usuniecie klasy aktywnej 
          //  if(!sidebar.classList.contains('active')){
                menuLinks.forEach(el=>{
                     el.classList.remove('activeMenu'); 
                      console.log('remve', el );
                       });
                 //po kliknieciu dodanie klasy
            e.target.classList.add('activeMenu');
            console.log('active',e.target.classList.add('activeMenu'); );
            //dodanie do sessionstorage index i ktore element
            sessionStorage.setItem("activeLi", index);
            console.log('saveStoraege',  sessionStorage.getItem("activeLi"));
      //      }
        });
       
    });
});
//dodanie aktive taba na wesjciue do home 
// window.addEventListener('DOMContentLoaded', ()=>{
//     console.log('sciezke', path);
//     if(path.includes('index.html')){
//             menuLinks[0].classList.add('activeMenu');
//     }
   
// }
// )


//zmiana trybu po kliknieciu na slonce badz ksiezyc w lewym gornym rogu
    mode.forEach(icon =>{
        icon.addEventListener('click', (e)=>{
        console.log('clik', e.target);
            body.classList.toggle("white");
        })
    })








links.forEach(link => {
     const href = link.getAttribute('href');
     console.log(href);
     if('/' + href === path){
         console.log('Path:', path);
         link.classList.add('activeMenu')
     }
 });


//search bar nasluch

document.querySelector(".search input").addEventListener("focus",()=>{
    document.querySelector(".search i").style.cssText = 'color: rgb(0,255,255); transition: .3s ease all;'
});
document.querySelector(".search input").addEventListener("blur",()=>{
    document.querySelector(".search i").style.cssText = '';
});