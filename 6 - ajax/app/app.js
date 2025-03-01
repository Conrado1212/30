const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//endpoint
const cities = [];
//array


//wpierdzielic do arraya

const prom = fetch(endpoint)
.then(blob =>blob.json())
.then(data => cities.push(...data));

//funkcja suzkajaca
function find(word, cities){
    return cities.filter(place =>{
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}
//number to . or commass
function numberTo(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


//funkcja wyswietlajaca 
function display(){
   // console.log(this.value);
   const matchArray = find(this.value, cities);
   const html = matchArray.map(place=>{
       const regex = new RegExp(this.value, 'gi');
       const name = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
       const state = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
    <span class="name">${name}, ${state}</span>
    <span class="pop">${numberTo(place.population)}</span>
    </li>`
   }).join('');
   sug.innerHTML = html;
  // console.log(matchArray);
}
//zmienie 
const search = document.querySelector('.search');
const sug = document.querySelector('.sug');

//nasluchiwanie
search.addEventListener('change', display);
search.addEventListener('keyup', display);