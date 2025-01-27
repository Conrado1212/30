
let slide = document.querySelectorAll(".slides img");
let slide2 = document.querySelector(".slides");
let slide3 = document.querySelectorAll(".sliders img");


let index = 0;

let intervalId = null;
document.addEventListener("DOMContentLoaded", initialize);

slide2.addEventListener("wheel", (e) =>{
    e.preventDefault();
    slide2.scrollLeft += e.deltaY;
})


function initialize(){

    slide.length > 0  ? (slide[index].classList.add('active'), intervalId =  setInterval(next, 4000),slide3[index].classList.add('active-test')) :  false;
    
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

    slide3.forEach(slide => {
        slide.classList.remove('active-test');
    });
    slide3[index].classList.add('active-test');
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
    con.style.scrollBehavior = "auto";
})

function nextBTN(){
   // console.log(con.scrollLeft);
    if(con.scrollLeft >= 900){
        con.style.scrollBehavior = "smooth";
        con.scrollLeft = 0;
    }else{
        con.style.scrollBehavior = "smooth";
        con.scrollLeft += 900;
        console.log(con.scrollLeft);
    }
}

function prevBTN(){

    console.log(con.scrollLeft);
 //   con.scrollLeft -= 900;
     if(con.scrollLeft <= 0){
        con.style.scrollBehavior = "smooth";
         con.scrollLeft = 900;
     }else{
        con.style.scrollBehavior = "smooth";
         con.scrollLeft -= 900;
        console.log(con.scrollLeft);
     }
}