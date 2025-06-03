//body
const body = document.querySelector('body');
//search menu
const searchMenu = document.querySelector('#sidebar ul li input');
//barsy x =
const bars = document.querySelector('.bars');
//szukajka 
const iconSearch = document.querySelector('#sidebar ul li .fa-magnifying-glass');
//szukajka glowna 
const searchMain = document.querySelector('#header .search input');
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
    }else if(window.location.pathname === '/' || window.location.pathname.includes('index.html')){
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

 
    setTimeout(function(){
        const rowsTable = document.querySelectorAll("#endpoints-table tbody tr");
        if(rowsTable){
            rowsTable.forEach(row =>{
             const actionBtn =    row.querySelector('td:nth-child(3) .action-btn:nth-child(1)');
             const actionBtnUpd =    row.querySelector('td:nth-child(3) .action-btn:nth-child(2)');
             console.log("Delete Btn:", actionBtn);
             console.log("Update Btn:", actionBtnUpd);



             if(actionBtn){
             actionBtn.addEventListener('click',()=>{
                document.querySelector('.overlay').style.display = 'flex';
                const endpointName = row.querySelector('td:nth-child(1)').textContent;

                console.log('Del', endpointName);

                // const delInput = document.querySelector("#del-input");
                // const jsonData = document.querySelector("#json-data");
                // if(delInput && jsonData){
                //     jsonData.style.display = 'none';
                //     delInput.style.display = 'block';
                // }

                document.querySelector('.endpoint-cname').textContent = endpointName;

               const delBtn = document.querySelector("#del-endpoint");
            //    delBtn.replaceWith(delBtn.cloneNode(true));
               delBtn.addEventListener('click', () => {
                    const input_value = document.querySelector('#del-input').value.trim()
                   if(input_value === 'confirm'){
                    deleteEndpoint(endpointName);
                   } else{
                    document.querySelector('.info-endpoint').textContent = 'Incorrect value bye 😂😂😂';
                    setTimeout(closeInfo,700);
                   
                   }
                });
               });
             }
             if(actionBtnUpd){
                actionBtnUpd.addEventListener('click',()=>{
                    document.querySelector('.overlay2').style.display = 'flex';
                    const endpointName = row.querySelector('td:nth-child(1)').textContent;
                    const endpointData = row.querySelector('td:nth-child(2)').textContent;

                   console.log('update name', endpointName);

                    document.querySelector('.endpoint-cname2').textContent = endpointName;
                   document.querySelector('.info-endpoint2').textContent = 'Update your endpoint';
                //    const delInput = document.querySelector("#del-input");
                   const jsonData = document.querySelector("#json-data");
                //    if(jsonData && delInput){
                //     delInput.style.display = 'none';
                //     jsonData.style.display = 'block';
                //    }
                  
                   jsonData.textContent = endpointData;

                   console.log('jsondata', endpointData);

                   const updBtn = document.querySelector("#upd-endpoint");
                //    updBtn.replaceWith(updBtn.cloneNode(true));

                   updBtn.addEventListener('click', () => {
                      
                       console.log('jsondata', endpointData);
                       console.log('aszdadadad',updBtn);
                       try{
                        const updatedData = JSON.parse(jsonData.value);
                        // updatedData.forEach(item => {
                        //     delete item.email;
                        // });

                        console.log('updated', updatedData);
                        axios.patch(`http://localhost:3000/upd/${endpointName}`, updatedData, {
                            headers:{
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response =>{
                            console.log("Upd", response.data);
                            document.querySelector(".overlay").style.display = "none";
                            location.reload();
                        })
                        .catch(e =>{
                            console.error("Error upd:", e);
                            alert(e);
                        });
    
                       }catch(e){
                           console.error('Json parse error', e);
                           alert(e)
                       }
                 
                   });
                  });
                }
               });
             }
            
    },1000);
});
function deleteEndpoint(endpointName){
    axios.delete(`http://localhost:3000/del/${endpointName}`)
    .then(response =>{
        console.log(`Endpoint ${endpointName} has been deleted`);

        document.querySelector('.overlay').style.display = 'none';

        location.reload();
    })
    .catch(e =>{
        console.error('Error', e);
    })
}
    
  

/*update endpoint strukture*/
// setTimeout(function upd(){
//     const rowsTable = document.querySelectorAll("#endpoints-table tbody tr");
//     if(rowsTable){
//         rowsTable.forEach(row =>{
//          const actionBtnUpd =    row.querySelector('td:nth-child(3) .action-btn:nth-child(2)');
//          console.log(actionBtnUpd);

//          const updData = document.querySelector("#json-data");
//          const delInput = document.querySelector("#del-input");
//          if (delInput) {
//             delInput.style.display = "none";
//         }


//           if(actionBtnUpd){
//             actionBtnUpd.addEventListener('click',()=>{
//              document.querySelector('.overlay').style.display = 'flex';
//              const endpointName = row.querySelector('td:nth-child(1)').textContent;
//              const endpointData = row.querySelector('td:nth-child(2)').textContent;
//             console.log('update name', endpointName);
//              document.querySelector('.endpoint-cname').textContent = endpointName;
//             document.querySelector('.info-endpoint').textContent = 'Update your endpoint';
//             document.querySelector('.input-endpoint').style.display = 'none';
//             document.querySelector('#json-data').innerText = endpointData;
//              document.querySelector('#del-endpoint').addEventListener('click', () => {
                  
//             });
//            });
//          }
//         });
//     }
   
// },1000);
   











// });
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

//Object.keys(endpoint.data[0])
//analizda danego obiektu 
function getStructure(obj) {
    //sprawdzenie czy obj jest tablica
    if (Array.isArray(obj)) {
        //sprawdzenie pierwszego obiektu w tablicy
        return obj.length ? [getStructure(obj[0])] : [];
        //sprawdznie czy boiekt to obiekt 
    } else if (typeof obj === "object" && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => { //pobranie kluczy obietku 
            acc[key] = typeof obj[key] === "object" ? getStructure(obj[key]) : typeof obj[key]; //zwrca typ wartosci w obiekcie 
            return acc;
        }, {});
    }
    return typeof obj; //zwrocienie typu wartosci lda pojedynczych pol 
}

document.addEventListener('DOMContentLoaded', ()=>{
    if(window.location.pathname.includes('report.html')){
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("http://localhost:3000/dynamic")
        .then(response => {
          const data = response.data.endpoints;
          console.log('Check data', data);
        //   console.log('Check data endpoints', data.endpoints);
          const tbody = document.querySelector("#endpoints-table tbody");
            if(!data || data.length === 0){
                const noData = document.createElement("tr");
                noData.innerHTML =`<td colspan=3 style="text-align:center;  color: transparent;
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text; font-size: 2rem; font-weight: bold;">No Data Available</td>`;
                tbody.appendChild(noData);
            }
          data.forEach(endpoint => {
              console.log('Endpoint log', endpoint);
            const row = document.createElement("tr");


            row.innerHTML = `<td>${endpoint.endpoint}</a></td><td>${JSON.stringify(getStructure(endpoint.data), null, 2)}</td><td>
            <div class="buttons-container">
                 <button class="action-btn">
                     <i class="fa-solid fa-trash"></i>
                 </button>
                 <button class="action-btn">
                     <i class="fa-regular fa-pen-to-square"></i>
                 </button>
                 <button class="action-btn">
                 <a href="http://localhost:3000/${endpoint.endpoint}" target="_blank"> <i class="fa-regular fa-window-restore"></i></a>
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
// if(table){
// document.querySelector('#endpoints-table .fa-gear').addEventListener('click',()=>{
//     console.log('clicked');
//     const filter = document.querySelector('.filter');
//    if(filter.style.opacity ==="1"){
//    filter.style.cssText='opacity:0;display: none;'
//    } else{
//     filter.style.cssText='opacity:1;display:flex;'
//    }
// })
// }


//reload 

if(table){
    document.querySelector('#endpoints-table .fa-rotate-right').addEventListener('click',()=>{
        console.log('reload test');
      location.reload();
      
    })
    }

///szukanie search 
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const endpoint2 = 'http://localhost:3000/dynamic';
//endpoint

const dynamic = [];
//array
axios.get(endpoint2)
.then(response =>{
    response.data.endpoints.forEach(e=>{
        dynamic.push(e.endpoint)
console.log('ttttt', e.endpoint);
    })
  
   
   console.log('Dane axios', dynamic);
})
.catch(e =>{
    console.error('Blax axios', e);
})

const prom = fetch(endpoint)
.then(blob => blob.json())
.then(data =>{
    cities.push(...data);
    console.log('test citeis ssss',cities);
} );

console.log('test citeis ',cities);


function find(word, cities){
    return cities.filter(place =>{
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function find2(word, dynamicData){
    return dynamicData.filter(endpoint =>{
        const regex = new RegExp(word, 'gi');
        return endpoint.match(regex);
    })
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

function display2(){
    const word = search.value;
    const matchArray = find2(word, dynamic);

    const html = matchArray.map(endpoint => {
        const regex = new RegExp(word, 'gi');
        const high = endpoint.replace(regex,  `<span class="hl">${word}</span>`);
        return `
        <li><i class="fa-solid fa-clock-rotate-left"></i>
        <a href="http://localhost:3000/${endpoint}" style="text-decoration:none; color:var(--black-color);" target="_blank" class="name">${high}</a>
        </li>`;
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
search.addEventListener('change', function() {
    resultSearch();
    display2.call(this);
});
search.addEventListener('keyup', function() {
    resultSearch();
    display2.call(this);
});

search.addEventListener('blur', function(){
    setTimeout(()=>{
        sug.style.display = "none";
        console.log('time chow');
    }, 200)
});

sug.addEventListener('mousedown', function(event) {
    event.preventDefault(); 
});


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
    document.querySelector('.overlay2').style.display = 'none';
  
}



/*wyszukiwanie search 1 to 23*/


searchMenu.addEventListener('input', function(){
    console.log('test', this.value);
    searchMain.value = this.value;
    searchMain.dispatchEvent(new Event('change'));
});

searchMenu.addEventListener('blur', function() {
    setTimeout(() => {
        sug.style.display = "none"; 
        searchMenu.value ='';
        search.value = '';
    }, 200); 
});