const panel = document.querySelectorAll('.panel');

function toggle(){
    console.log('ddddddd');
    this.classList.toggle('open');
}
function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
         this.classList.toggle('open-active');
        }
   
}
panel.forEach(p => p.addEventListener('click', toggle));
panel.forEach(p => p.addEventListener('transitionend', toggleActive));