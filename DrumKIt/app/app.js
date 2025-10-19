const buttons = document.querySelectorAll('button');
var audio;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        letter(button.innerHTML);
        animate(button.innerHTML);
    })
});

document.addEventListener("keydown", (e)=>{
    letter(e.key);
    animate(e.key)
})
function letter(xd){
    switch(xd){
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
         case "a":
         audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
         case "s":
             audio = new Audio('sounds/tom-3.mp3');
             audio.play();
             break;
             case "d":
                 audio = new Audio('sounds/tom-4.mp3');
                 audio.play();
                 break;
                 case "j":
                     audio = new Audio('sounds/crash.mp3');
                     audio.play();
                     break;
                     case "k":
                         audio = new Audio('sounds/kick-bass.mp3');
                         audio.play();
                         break;
                         case "l":
                             audio = new Audio('sounds/snare.mp3');
                             audio.play();
                             break;
                             default: console.log(button.innerHTML);
    }
}

function animate(key){
 const button =    document.querySelector("."+key);
    button.classList.add('press');
    setTimeout(function dd(){
        button.classList.remove('press');
    },100)

    
}
function house(name,age,expYear,cleaningRep){
    this.name = name;
    this.age = age;
    this.expYear = expYear;
    this.cleaningRep = cleaningRep;
    this.clean = function(){
        alert("Cleaning")
    }
}
var houseKeeper1 = new house("test1",49,10, ["bath", "lobby", "bedroom"])
// var haousekeeper = {
//     name: "test1",
//     age: 49,
//     expYear: 10,
//     cleaningRep: ["bath", "lobby", "bedroom"]
// }

function  bellyBoy(name,age,work, languages){
    this.name = name;
    this.age = age;
    this.work = work;
    this.languages = languages;
}

var bellyboy1 = new bellyBoy("tim",19,true, ["eng","pol"])
 
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }