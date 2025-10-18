

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const id = document.getElementById('game');
const text = document.querySelector('h1');
const p1text = document.getElementById('player1');
const p2text = document.getElementById('player2');

const dice =['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png']

// document.addEventListener("DOMContentLoaded", () => {
//   game();
//   });
let value1;
let value2;
  function game(){
   let count = 0;
   if(p1text.classList.contains('winner')){
     p1text.classList.remove('winner')
   }
   if(p2text.classList.contains('winner')){
    p2text.classList.remove('winner')
   }
   let inteval = setInterval(()=>{
    value1 = dice[Math.floor(Math.random() *6)]
     value2 = dice[Math.floor(Math.random() *6)]
          p1.src="/images/"+value1
          p2.src="/images/"+value2
          count++;
          if(count>=5){
            clearInterval(inteval)
            if(value1 > value2){
              text.innerHTML = `Player 1 Wins`
              p1text.classList.add('winner');
            }else if(value2 > value1){
              text.textContent = "Player 2 Wins"
              p2text.classList.add('winner');
            }else{
              text.textContent = "Draw";
            }
          }
    
   },100)
      
  }
  id.addEventListener("click",()=>{
    game();
   // window.location.reload();
  })