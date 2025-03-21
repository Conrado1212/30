function play(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
     console.log(key);
     key.classList.add('playing'); 
   
 }



function removeTransition(e){
    if(e.propertyName !== 'transform')  return;
    this.classList.remove('playing'); 
}
const keys = document.querySelectorAll('.key');
//keys.addEventListener('transitonend');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown',play);