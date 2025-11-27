const circle = document.getElementById('circle');
const valueData = document.getElementById('data');
const add = document.getElementById('add');
let data =[''];
let spin = 0;
let animating = false;
circle.addEventListener('click',()=>{
    circle.classList.add('no-animation');
    if(animating) return;
     angle  = 0;
   speed = 5;
 max = 30;
 phase = 'accelerate';
 frame = 0;
 animating = true;
    animate();
    const extra = 360 * 5;
    const randomDeg =  Math.floor(Math.random() * 360); 
    spin += extra + randomDeg;
    circle.style.transform =`rotate(${spin}deg)`;
})

circle.addEventListener('transitionend', () => {
    console.log('done!');
  });
  let angle  = 0;
  let speed = 5;
let max = 30;
let phase = 'accelerate';
let frame = 0;
  function animate(){
      angle+=speed;
      circle.style.transform =`rotate(${angle}deg)`;
    if(phase ==='accelerate'){
        speed+=0.5;
        if(speed >=max){
            phase = 'steady';
            frame = 0;
        }
    }else if(phase ==='steady'){
        frame++;
        phase ='decelerate';
    }else if( phase ==='decelerate'){
        speed *= 0.99;
        if(speed < 0.1){
            animating = false
            
            return
        }
    }
      requestAnimationFrame(animate);
  }



 //let counter = 1;

//  valueData.addEventListener('change',(e)=>{
//      console.log(valueData.value);
//  })



 add.addEventListener('click',(e)=>{
e.preventDefault()
const value  = valueData.value;
 const lines = value.split('\n').filter(l => l.trim() !== '');
 console.log(lines);
 circle.innerHTML ='';

 lines.forEach((line, index)=>{
     const div = document.createElement('div');
     div.className ='text';
     div.style.setProperty('--n',index+1);
     div.style.setProperty('--count',lines.length);
     div.innerHTML=`<p>${line}</p>`
     circle.appendChild(div);
 })
 });