const d = [
    {
    name: 'Snickers', age: 2
    },
    {
        name: 'hugo', age : 8
    }
];
function test(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '4rem';
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
}

//regular 

console.log('hello');

//interpolate 


console.log('Hello i am %s conrado');
//console.log(`Hello i am ${var}`);


//styled 
console.log('%c I am some great text', 'font-size:50px; background:red');

//warning

console.warn('oh noo');

//error

console.error('SHit happens');

//info 


console.info('infoooooo')

//timitng 

console.assert(1 ===1 , 'tah is wrong');


//cleaning 

console.clear();

// viewwing dom elements 

//console.log(p);
//console.dir(p);

//grouping 


d.forEach(d =>{
    console.log(`This is the ${d.name}`);
    console.group(`${d.name}`);

    console.groupEnd(`${d.name}`);
})
//counting 


console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');



//timing 

console.time('Fetch data');
fetch('https://api.github.com/users/wesbos')
.then(data=> data.json())
.then(data => {
    console.timeEnd('Fetch data')
    console.log(data);
})


console.table('adadad',d)