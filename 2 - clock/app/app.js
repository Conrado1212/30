const sec = document.getElementById('s');
const min = document.getElementById('m');
const hour = document.getElementById('h');
function clockFun(){
    //pobranie daty 
    const date = new Date();
    //pobranie sekund
    const  seconds = date.getSeconds() / 60;
    //pobranie minut
    const  minutes = (seconds + date.getMinutes()) /60;
    //pobranie godzin 
    const  hours = (minutes + date.getHours()) / 12;


    rotateClock(sec,seconds);
    rotateClock(min,minutes);
    rotateClock(hour,hours);
}
//rotacja o dana zmienna
function rotateClock(element,rotation){
    element.style.setProperty('--rotate', rotation * 360);  
}

setInterval(clockFun,1000);