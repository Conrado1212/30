const circle = document.getElementById('circle');
const winner = document.getElementById('winner');
const valueData = document.getElementById('data');
const add = document.getElementById('add');
valueData.value ='test1' +'\n' + 'test2' + '\n'+ 'test3' + '\n'+ 'test4' + '\n'+ 'test5';
let data =[];
let spin = 0;
let animating = false;
let angle  = 0;
let speed = 5;
let max = 30;
let phase = 'accelerate';
let frame = 0;
circle.addEventListener('click',()=>{
    circle.classList.add('no-animation');
    if(animating) return;
     angle  = 0;
   speed = 5;
 max = Math.floor(20 + Math.random() * 100);
 phase = 'accelerate';
 frame = 0;
 animating = true;
    animate();
    // const extra = 360 * 5;
    // const randomDeg =  Math.floor(Math.random() * 360); 
    // spin += extra + randomDeg;
    // circle.style.transform =`rotate(${spin}deg)`;
    
})

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
            animating = false;
            end();
            data.push(angle);
            console.log(data);
            const len = document.querySelectorAll('.text').length;
            getResult(angle);
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
    const div = document.createElement('div');
    div.className ='dot';
    circle.appendChild(div);
   let  counter = 360/lines.length
    //console.log(counter);
    const color =['#521ff7','#AE76F0','#8326F0','#f0c000','#121212','#787e96','#F54927'];
    let back ='';
    for(let i=0,c=0;i<360;i+=counter,c++){
        if(c < lines.length -1){
            back+=color[c % color.length] +' '+ i + 'deg' + ' ' + (i+counter) + 'deg,';     
        }else{
            back+=color[c % color.length] +' '+ i + 'deg' + ' ' + (i+counter) + 'deg';   
        }
    }
    console.log(back);
    circle.style.setProperty("background",`conic-gradient(${back})`,"important");
 });

function end(){
    console.log('test end');
    setTimeout(()=>{
        circle.style.setProperty("transform",`none`,"important");
        winner.textContent ='';
    }, 3000)
  
}

function getResult(angle){
    console.log(valueData.value)
const arr = valueData.value.split('\n');
console.log(arr.reverse());
    const test  = angle /360 ;
    console.log(test);
    const value = 0+'.'+test.toString().split(".")[1];
    console.log(value);
    let xd  = value*360 
    console.log(xd);
    const sector  = 360/ arr.length
    let index = Math.floor(xd/sector);
    console.log(arr[index]);
  winner.innerHTML = `<i class="fa-solid fa-trophy"></i> ${arr[index]} <i class="fa-solid fa-trophy"></i>`;
}
