const panel = document.querySelectorAll('.panel');
console.log(panel);
let active = null; //zmiena do checka czy acitve cvzy nie 
function toggle(){
    console.log('ddddddd');
  
//sprawdzenie czy thsi to active
    if(active !==this){
        //jezeli nie to sprawdzenie czy active istneije 
        if(active){
            //usuneicie klasy
            active.classList.remove('open');
           // active.classList.remove('open-active');
        }
      //  jesli nie to dodanie klasyu
        this.classList.add('open');
        //ustawienia active na this 
        active = this;
    }else{
        //w przeciwnym wypatku toggle oraz ustawinie active 
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