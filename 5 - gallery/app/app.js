const panel = document.querySelectorAll('.panel');
console.log(panel);
let active = null;
function toggle(){
    console.log('ddddddd');
  

    if(active !==this){
        if(active){
            active.classList.remove('open');
           // active.classList.remove('open-active');
        }
        this.classList.add('open');
        active = this;
    }else{
        this.classList.toggle('open');
        active = this.classList.contains('open') ? this : null;
    }


}
function toggleActive(e){
    console.log(this);
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
         this.classList.toggle('open-active');
        }
   
}
panel.forEach(p => p.addEventListener('click', toggle));
panel.forEach(p => p.addEventListener('transitionend', toggleActive));