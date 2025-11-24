const circle = document.getElementById('circle')

let spin = 0;
circle.addEventListener('click',()=>{
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
    }
      requestAnimationFrame(animate);
  }