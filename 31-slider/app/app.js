
let slide = document.querySelectorAll(".slides img");
let slide2 = document.querySelector(".slides");


let index = 0;

let intervalId = null;
document.addEventListener("DOMContentLoaded", initialize);

slide2.addEventListener("wheel", (e) =>{
    e.preventDefault();
    slide2.scrollLeft += e.deltaY;
})


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


let con = document.querySelector('.gallery');
//mouse wheel scroll to rotate slide
con.addEventListener("wheel", (e) =>{
    e.preventDefault();
    con.scrollLeft += e.deltaY;
})

function nextBTN(){
    console.log(con.scrollLeft);
    if(con.scrollLeft >= 900){
        con.scrollLeft = 0;
    }else{
        con.scrollLeft += 900;
        console.log(con.scrollLeft);
    }
}

function prevBTN(){

    console.log(con.scrollLeft);
 //   con.scrollLeft -= 900;
     if(con.scrollLeft <= 0){
         con.scrollLeft = 900;
     }else{
         con.scrollLeft -= 900;
        console.log(con.scrollLeft);
     }
}