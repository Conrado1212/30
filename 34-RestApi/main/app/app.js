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

// window.addEventListener('scroll', () => {
//     //aktualna pozycja skrolla
//   let currentScrollPos = document.documentElement.scrollTop || window.scrollY;
// //check pozycji srcoplla
//   if (prevScrollPos > currentScrollPos) {
   
//     header.style.opacity = '1';
//   } else {
   
//     header.style.opacity = '0';
//   }
//   //akutalizacja pozycji scrolla
//   prevScrollPos = currentScrollPos; 
//   console.log('Aktualna pozycja scrolla:', currentScrollPos);
// });

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
    if(sessionStorage.getItem("theme") === 'white'){
        document.body.classList.add('white');
    }
    //dodanie zmiennej do sessionstorage
    const savedLi = sessionStorage.getItem("activeLi");
   

    menuLinks.forEach(el =>el.classList.remove('activeMenu'));
     //sprawdzenie zmiennej czy isteniej po przeladowaniu strony
    if(savedLi !== null && menuLinks[savedLi]){
        //jesli tak ddoanie klasy activeMenu
        menuLinks[savedLi].classList.add("activeMenu");
        console.log('po zaladowniu ',menuLinks[savedLi]);

        //jhesli zmienna nie istenije sprawdzam czy glowna storna aby dodac active do home 
    }else if(window.location.pathname.includes('index.html')){
        menuLinks.forEach(el => el.classList.remove('activeMenu'));
        menuLinks[0].classList.add('activeMenu');
        sessionStorage.setItem('activeLi', 0);
    }

 
    
    //dla kazdego i dodajemy nasluch
    menuLinks.forEach((menuLink, index) => {
        menuLink.addEventListener('click',function(e){
           // e.preventDefault();
            // console.log('clicked', this);
            //najpier dla kazdego usuniecie klasy aktywnej 
          //  if(!sidebar.classList.contains('active')){
                menuLinks.forEach(el=>{
                     el.classList.remove('activeMenu'); 
                      console.log('remve', el );
                       });
                 //po kliknieciu dodanie klasy
            this.classList.add('activeMenu');
            console.log('active',this);
            //dodanie do sessionstorage index i ktore element
         //   sessionStorage.removeItem("activeLi"); 
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
                    //dodanie do session storage infomracji o theme jesli storna biala 
                if(document.body.classList.contains("white")){
                    sessionStorage.setItem("theme", "white");
                }else{
                    sessionStorage.removeItem("theme");
                }
            });
        });


   








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


//ladownaie raportu z rest api



document.addEventListener('DOMContentLoaded', ()=>{
    if(window.location.pathname.includes('report.html')){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          const data = response.data;
          console.log('Check data', data);
          const tbody = document.querySelector("#endpoints-table tbody");
    
          data.forEach(user => {
              console.log('Endpoint log', user);
            const row = document.createElement("tr");
            row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>
            <div class="buttons-container">
                 <button class="action-btn">
                     <i class="fa-solid fa-trash"></i>
                 </button>
                 <button class="action-btn">
                     <i class="fa-regular fa-pen-to-square"></i>
                 </button>
                 <button class="action-btn">
                                <i class="fa-regular fa-window-restore"></i>
                            </button>
            </div>
         </td>`;
            tbody.appendChild(row);
          });
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }

});



//wyswietlanie scrolla po njajechaniu na tabelke jesli jes zbyt mala
const table = document.getElementById('endpoints-table')
if(table){
    document.querySelector('#endpoints-table').addEventListener('mouseover', ()=>{
        document.querySelector('#endpoints-table').style.overflowY  = 'auto';
    });
    document.querySelector('#endpoints-table').addEventListener('mouseout', ()=>{
        document.querySelector('#endpoints-table').style.overflowY = 'hidden';
    });
}




///filtorwanie tabeli 
if(table){
document.querySelector('#endpoints-table i').addEventListener('click',()=>{
    console.log('clicked');
    const filter = document.querySelector('.filter');
   if(filter.style.opacity ==="1"){
   filter.style.cssText='opacity:0;display: none;'
   } else{
    filter.style.cssText='opacity:1;display:flex;'
   }
})
}


///szukanie search 
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//endpoint
const cities = [];
//array


const prom = fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

console.log('test citeis ',cities);


function find(word, cities){
    return cities.filter(place =>{
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

//number to comma\

function numberTo(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

//wyswietlanie danych w szukajce

function display(){
    const matchArray = find(this.value, cities);
    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value, 'gi');
        const name = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const state = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
     return `
     <li><i class="fa-solid fa-clock-rotate-left"></i>
     <span class="name">${name}, ${state}</span>
     <span class="pop">${numberTo(place.population)}</span>
     </li>`
    }).join('');
    
    sug.innerHTML = html;
}
function resultSearch(){
    sug.style.display = "block";
}
//zmienie 
const search = document.querySelector('.search-input');
const sug = document.querySelector('.search-result');

//nasluchiwanie
search.addEventListener('change', ()=>(resultSearch(),display()));
search.addEventListener('keyup', ()=>(resultSearch(),display()));




/*mail wysylka */


function sendMail(){
    const name = document.getElementById('name-message').value;
    const message = document.getElementById('body-message').value;

    const email = 'conrado1214@gmail.com';
    const subject = encodeURIComponent("Question from " + name + 'about api')

    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}




/*hover test */



// document.querySelectorAll("#sidebar ul li").forEach(item => {
//     item.addEventListener("mouseenter", () => {
//         console.log('test', item);
//         const tooltip = item.querySelector(".tooltip");
//         console.log(tooltip);
//         if (tooltip) {
//             tooltip.style.setProperty("opacity", "1", "important");
//             tooltip.style.top = "50%";
//         }
//     });

//     item.addEventListener("mouseleave", () => {
//         const tooltip = item.querySelector(".tooltip");
//         if (tooltip) {
//             tooltip.style.opacity = "0";
//             tooltip.style.top = "0";
//         }
//     });
// });


/*przeslanei request z formularza stworznie nowego endpointa */


if(document.getElementById("submit")){
document.getElementById("submit").addEventListener("click", async function(event) {
    event.preventDefault();
    const endpointName = document.getElementById("endpoint-name").value;
    const endpointData = document.getElementById("endpoint-data").value;

    let jsonData;

    // walidacja danych przesylanych
    try {
        jsonData = JSON.parse(endpointData);
    } catch (error) {
        alert("Error: Invalid format!");
        return;
    }

    const payload = {
        endpoint: endpointName,
        data: jsonData
    };

    try {
        const response = await axios.post("http://localhost:3000/new", payload, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Response data:", response.data.message);
      //  alert("Endpoint has been created successfully!", + response.data.message);
       // alert(response.data.message);
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.endpoint-cname').textContent = response.data.endpointName;
        document.querySelector('.info-endpoint').textContent = response.data.message;
        //document.querySelector('.method-endpoint').textContent = response.data.method;
        // setTimeout(() => {
            document.getElementById("endpoint-name").value = '';
         document.getElementById("endpoint-data").value = '';
        // }, 500);
       
        console.log("Po resecie:", endpointName.value, endpointData.value);
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending data.");
    }
});
}   
function closeInfo(){
    document.querySelector('.overlay').style.display = 'none';
  
}