
const slide = document.querySelectorAll(".slides img");


let index = 0;

let intervalId = null;
document.addEventListener("DOMContentLoaded", initialize);
function initialize(){

    slide.length > 0  ? (slide[index].classList.add('active'), intervalId =  setInterval(next, 4000)) :  false;
    
   // console.log(intervalId);
}

function show(indexS){
    if(indexS >= slide.length){
        index = 0;
    }else if(indexS < 0 ){
        index = slide.length - 1;
    }

    slide.forEach(slide => {
        slide.classList.remove('active');
    });
    slide[index].classList.add('active');
}


function next(){
index++;
show(index);
}


function prev(){
clearInterval(intervalId);
index--;
show(index);
}