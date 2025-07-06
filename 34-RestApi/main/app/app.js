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
//home links
const endpoint_mode = document.querySelectorAll('.mode .json-li i');
//fomr-endpoint
const endpoint_form = document.getElementById('endpoint-form');

const homeLinks = document.querySelectorAll('.glass a');
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

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('testttdadada');

//     const currentPath = window.location.pathname;
//     const menuLinks = document.querySelectorAll('.menuLink');

//     // Sprawdzenie i ustawienie aktywnego menu na podstawie adresu URL
//     menuLinks.forEach(menuLink => {
//         const menuPath = new URL(menuLink.href, window.location.origin).pathname;

//         if (menuPath === currentPath) {
//             menuLinks.forEach(el => el.classList.remove('activeMenu'));
//             menuLink.classList.add('activeMenu'); // Ustaw aktywne menu zgodnie z href
//         }
//     });

//     // Obsługa kliknięcia w link
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener('click', function(e) {
//             e.preventDefault();
//             menuLinks.forEach(el => el.classList.remove('activeMenu'));
//             this.classList.add('activeMenu');
//             window.location.href = this.href; // Przekierowanie na nową stronę
//         });
//     });
// });
//
document.addEventListener('DOMContentLoaded', ()=>{
  console.log('testttdadada');
    if(sessionStorage.getItem("theme") === 'white'){
        document.body.classList.add('white');
        
    }
    //dodanie zmiennej do sessionstorage
  //  const savedLi = sessionStorage.getItem("activeLi");


    
  const savedLi = sessionStorage.getItem("activeLi");
   console.log('testli', savedLi);
   const path = window.location.pathname;

  menuLinks.forEach(el =>el.classList.remove('activeMenu'));
   //sprawdzenie zmiennej czy isteniej po przeladowaniu strony


      //jhesli zmienna nie istenije sprawdzam czy glowna storna aby dodac active do home 
   if(path === '34-RestApi/main/' || path.includes('index.html')){
      menuLinks.forEach(el => el.classList.remove('activeMenu'));
      menuLinks[0].classList.add('activeMenu');
      sessionStorage.setItem('activeLi', 0);
  }else if(path === '/34-RestApi/main/endpoint/'){
      console.log('endpoint');
    menuLinks.forEach(el => el.classList.remove('activeMenu'));
    menuLinks[2].classList.add('activeMenu');
    sessionStorage.setItem('activeLi', 2);
  }else if(path === '/34-RestApi/main/message/'){
    console.log('message');
    menuLinks.forEach(el => el.classList.remove('activeMenu'));
    menuLinks[3].classList.add('activeMenu');
  }else if(path === '/34-RestApi/main/report/'){
    console.log('report');
    menuLinks.forEach(el => el.classList.remove('activeMenu'));
    menuLinks[1].classList.add('activeMenu');
  }else if(savedLi !== null && menuLinks[savedLi]){
    //jesli tak ddoanie klasy activeMenu
    menuLinks[savedLi].classList.add("activeMenu");
    console.log('po zaladowniu ',menuLinks[savedLi]);
  }else{
      console.log("empty");
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

    if(homeLinks){
        homeLinks.forEach((homeLink, index)=>{
            homeLink.addEventListener('click', function(e){
          //  e.preventDefault();
                console.log('test home');
                menuLinks.forEach(el=>{  el.classList.remove('activeMenu'); 
                  //   console.log('remve', el );
                      });
                      
               //    console.log('homelink', homeLink.href);
                  const path = new URL(homeLink.href, window.location.origin).pathname;
                //      console.log(path);
                  menuLinks.forEach(menuLink =>{
                      const menuPath = new URL(menuLink.href, window.location.origin).pathname;
                      console.warn(menuPath);
                      if(menuPath === path){
                          menuLink.classList.add('activeMenu');
                        //  sessionStorage.setItem("activeLi", menuLinks.indexOf(menuLink));
                        sessionStorage.setItem("activeLi", index+1);
                      //  history.pushState({ activeLi: index }, "", path);
                      }
                  })
                //  console.log(path);
                 
                   console.log('saveStoraege',  sessionStorage.getItem("activeLi"));     
            })
        })
    }


 
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


   








// links.forEach(link => {
//      const href = link.getAttribute('href');
//      console.log(href);
//      if('/' + href === path){
//          console.log('Path:', path);
//          link.classList.add('activeMenu')
//      }
//  });


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
    if(window.location.pathname.includes('/report')){
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("http://localhost:3000/dynamic")
        .then(response => {
          const data = response.data.endpoints;
          console.log('Check data', data);
        //   console.log('Check data endpoints', data.endpoints);
          const tbody = document.querySelector("#endpoints-table tbody");
            if(!data || data.length === 0){
                const noData = document.createElement("tr");
                noData.innerHTML =`<td colspan=5 style="text-align:center;  color: transparent;
                background: var(--text-gradient);
                -webkit-background-clip: text;
                background-clip: text; font-size: 2rem; font-weight: bold;">No Data Available</td>`;
                tbody.appendChild(noData);
            }
            function extractFullStructure(data) {
                const full = {};
                data.forEach(record => {
                  for (const key in record) {
                    if (key !== "id" && !(key in full)) {
                      full[key] = record[key];
                    }
                  }
                });
                return full;
              }
          data.forEach(endpoint => {
            const row = document.createElement("tr");
const struktura = extractFullStructure(endpoint.data || []);
const strukturaJSON = JSON.stringify(struktura).replace(/'/g, "&apos;");

row.setAttribute("data-structure", strukturaJSON);

            row.innerHTML = `<td>${endpoint.endpoint}</a></td><td>${endpoint.description}</td><td>${JSON.stringify(getStructure(endpoint.data), null, 2)}</td>
            <td><span id="rangeValue">${endpoint.count}</span><input type="range" id="range" class="range-slider" min="1" max="100" value="${endpoint.count}"></td>
            <td>
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
          slider();
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
    
});

/*slider */

function data(structure){
    const newData = {};
    for(const key in structure){
        if(key ==="id")continue; 
       
       const type = typeof structure[key];
       if (type === "number") {
        newData[key] = Math.floor(Math.random() * 100);
      } else if (type === "string") {
        newData[key] = `${key}_${Math.floor(Math.random() * 100)}`;
      } else if (type === "boolean") {
        newData[key] = Math.random() > 0.5;
      } else {
        newData[key] = null;
      }
    }
    return newData;
}



function slider(){
    document.querySelectorAll('.range-slider').forEach(slider=>{
        const span = slider.previousElementSibling;
        console.log('sss', span);
    const row = slider.closest('tr');
    console.log(row);
    const endpointName = row.querySelector('td:nth-child(1)').textContent.trim();
    console.log('ttt', endpointName);

    //const structureCell = row.querySelector('td:nth-child(3)');

    let struktura ={};
    try{
        struktura = JSON.parse(row.dataset.structure);
    }catch (e) {
        console.warn(`Nie udało się sparsować struktury z ${endpointName}:`, e);
      }
    let lastValue = Number(slider.value);
    slider.addEventListener('input', ()=>{
        const currentValue = Number(slider.value);
        console.log(currentValue);
        span.textContent = currentValue;
      
        if(currentValue > lastValue){
            const add = currentValue - lastValue;
            console.log("POST", endpointName);
            for(let i = 0;i<add; i++){
                const dane = data(struktura);
            
            axios.post(`http://localhost:3000/${endpointName}`, dane,{
                headers: { "Content-Type": "application/json" }
            })
            .then(response =>{
                console.log(`Dodane randomwe dane do ${endpointName}`, response.data);
               
            })
            .catch(e =>{
                console.error(`Error range`, e);
            })
        }
        lastValue = currentValue;
    }else if(lastValue < currentValue ){
        const del  = lastValue - currentValue
        console.log('del', endpointName);
        axtios.get(`http://localhost:3000/${endpointName}`)
        .then(response =>{
            const dane  = response.data;
            const lastID = dane.slice(-del).map(e => e.id);

            lastID.forEach(id =>{
                axios.delete(`http://localhost:3000/${endpointName}/${id}`)
                .then(()=>
                    console.log(`Del id = ${id} from ${endpointName}`)
                )
                .catch(err => console.error(`Error del id=${id}`, err))
            })
        })
        .catch(err=>{
            console.error(`No data from ${endpointName}`, err);
        });
        lastValue = currentValue;
    }
    });   
    });
    
}




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
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// const cities = [];
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


function find2(word, dynamicData){
    return dynamicData.filter(endpoint =>{
        const regex = new RegExp(word, 'gi');
        return endpoint.match(regex);
    })
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

function sendData() {
   
    let dane = [];
    let pola = [];

    elements.forEach(element =>{
        let text  = element.textContent?.trim() || element.value?.trim();
        if(text){
            element.tagName === "input" ? dane.push(text) : pola.push(text);
        }
    })


    let jsonData = JSON.stringify({ pola: dane });
        console.log(jsonData);

        try {
            jsonData = JSON.parse(jsonData);
        } catch (error) {
            alert("Error: Invalid format!");
            return;
        }
    
}
if(document.getElementById("submit")){
document.getElementById("submit").addEventListener("click", async function(event) {
    event.preventDefault();

    const isListMode = document.getElementById('endpoint-form').classList.contains('modeJson');
    console.log(isListMode);
    const endpointName = document.getElementById("endpoint-name").value;
    const endpointDesc = document.getElementById("endpoint-desc").value;
    let payload;
    if(isListMode){
        const elements = document.querySelectorAll("#list-endpoint li");
        console.log(elements);
        // const dane = [];
        // const  pola = [];
        let pola = {}
        elements.forEach(li =>{
            const label = li.querySelector("label");
        const input = li.querySelector("input");


        const key = label?.textContent?.trim();
        const value = input?.value?.trim();
        if (key && value) {
            pola[key] = value;
        }
        })
        // elements.forEach(element =>{
        //     let text  = element.textContent?.trim() || element.value?.trim();
        //     if(text){
        //         element.tagName === "input" ? dane.push(text) : pola.push(text);
        //     }
        // });
       let jsonData = JSON.stringify( pola );
      try {
        jsonData = JSON.parse(jsonData);
    } catch (error) {
        alert("Error: Invalid format!", error);
        return;
    }
       payload = {
            endpoint: endpointName,
            description: endpointDesc,
            data: jsonData
        }
    
    }else{
        const endpointData = document.getElementById("endpoint-data").value;
        let jsonData;

    // walidacja danych przesylanych
    try {
        jsonData = JSON.parse(endpointData);
    } catch (error) {
        alert("Error: Invalid format!");
        return;
    }

     payload = {
        endpoint: endpointName,
        description: endpointDesc,
        data: jsonData
    };
    }
    try {
        const response = await axios.post("http://localhost:3000/new", payload, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Response data:", response.data.message);
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.endpoint-cname').textContent = response.data.endpointName;
        document.querySelector('.info-endpoint').textContent = response.data.message;
            document.getElementById("endpoint-name").value = '';
            document.getElementById("endpoint-desc").value = '';
            if(!isListMode){
                document.getElementById("endpoint-data").value = '';
            }else{
                document.getElementById("list-endpoint").innerHTML = '';
            }
        //console.log("Po resecie:", endpointName.value, endpointData.value);
        } catch (error) {
        let modal = false;
        if(error.response?.status === 409){
            document.querySelector('.duplikat').style.display = 'flex';
           // console.log(error.response.status);
            document.querySelector('#status').textContent = `Status ${error.response.status}`;
            console.log(document.querySelector('.endpoint-cname').textContent = error.response.status);
            document.querySelector('#info-status').textContent = error.response.data?.error;
            console.log('test status', error.response);
            modal = true;
            document.getElementById("list-endpoint").innerHTML = '';
        }else if(error.response?.status === 400){
            modal = true
        }
        console.error("Error new:", error);
        if(!modal){
            alert("An error occurred while sending data.");
        }
       
    }
});
}   
  


function closeInfo(){

    ['.overlay','.overlay2','.duplikat'].forEach(e=>{
        const modal = document.querySelector(e);
        if(modal && modal.style.display !== 'none'){
            modal.style.display = 'none';
        }
    });
  
}


['.overlay','.overlay2','.duplikat'].forEach(e=>{
    const modal = document.querySelector(e);
modal.addEventListener('click', function(e){
    if(e.target === this){
        console.log('test this', this);
        closeInfo()
    }
})
})







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



/*code tryb */

function modeEndpoint(){
    if(endpoint_mode){
        console.log(endpoint_mode);
        endpoint_mode.forEach(icon =>{
            icon.addEventListener('click', (e)=>{
            console.log('clik', e.target);
            console.log(endpoint_form);
                endpoint_form.classList.toggle("modeJson");
                document.getElementById('submit').classList.toggle('btn-pos');
                if(endpoint_form && endpoint_form.classList.contains('modeJson')){
                   // let ul = document.getElementById("lista");
                    let ul  = document.createElement('ul');
                    ul.id = 'list-endpoint';
                    ul.style.listStyle =  'none';
                    const div = document.createElement('div');
                    div.id = 'simple';
                    div.classList.add('flex');
                    const button = document.createElement('button');
                    const input = document.createElement('input');
                    input.placeholder = 'Field-name';
                    const select = document.createElement('select');
                    select.name = "type";
                    select.id = "type-input";
                    const option = [
                        { value: 'text', label: 'Text' },
                        { value: 'checkbox', label: 'True/false' },
                        { value: 'date', label: 'Date' },
                        { value: 'number', label: 'Number' },
                        { value: 'Object', label: 'Object' }
                      ];
                    option.forEach(e=>{
                        const option = document.createElement('option');
                        option.value = e.value;
                        option.textContent = e.label;
                        select.appendChild(option)
                    })
                    input.classList.add('input-cre');   
                    button.id = 'plus';
                    button.type = 'button';
                    button.classList.add('button', 'button-flex');
                    button.style.width ='2vh';
                    const i = document.createElement('i')
                    i.classList.add('fa-solid', 'fa-plus')


                    endpoint_form.insertBefore(ul, document.getElementById('endpoint-data'));
                    endpoint_form.insertBefore(div, document.getElementById('endpoint-data'));
                    div.appendChild(input);
                    div.appendChild(select);
                    div.appendChild(button);
                    button.appendChild(i);
                    button.onclick= addField;
                   // document.getElementById('endpoint-data').remove();
                    console.log(ul);
                }else{
                    document.getElementById('list-endpoint').remove();
                    document.getElementById('simple').remove();
                  
                }
            });
        });
    }
}
modeEndpoint()


function addField() {
    let li = document.createElement("li");
    let ul = document.getElementById("list-endpoint");
    const select  = document.querySelector('#type-input').value;
    const labelName  = document.querySelector('.input-cre');
    if(labelName.value){
        li.innerHTML = `<label for"${select}">${labelName.value}</label> <input type="${select}" placeholder="Your value"> <button type="button" class="button2 button-flex"><i class="fa-solid fa-x"></i></button>`;
        ul.appendChild(li);

        const deleteButton = li.querySelector('button');
        deleteButton.addEventListener('click', () => {
        li.remove();
    });
    }else{
        alert('Field-name have no value')
    }
   
    
    labelName.value ='';
}
/*<ul id="lista" style="list-style:none ;">
        <li><label for="test">Example</label> <input type="text" placeholder="Wpisz wartość"></li>
    </ul>*/



    /*nasluich */


    // const originalSend = XMLHttpRequest.prototype.send;
    // XMLHttpRequest.prototype.send = function (...args) {
    //     this.addEventListener("load", function () {
    //         if (this.responseURL.includes("/dynamic")) {
    //             console.log("Endpoint dynamic został wywołany:", this.responseURL);
    //             alert('elo')
    //         }
    //     });
    //     return originalSend.apply(this, args);
    // };
            



    


    