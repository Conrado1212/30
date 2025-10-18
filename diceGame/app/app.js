

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const id = document.getElementById('game');
const text = document.querySelector('h1');
const p1text = document.getElementById('player1');
const p2text = document.getElementById('player2');



// document.addEventListener("DOMContentLoaded", () => {
//   game();
//   });

  function game(){
   let count = 0;
   if(p1text.classList.contains('winner')){
     p1text.classList.remove('winner')
   }
   if(p2text.classList.contains('winner')){
    p2text.classList.remove('winner')
   }
   let inteval = setInterval(()=>{
    let value1 = [Math.floor(Math.random() *6)+1]
    let  value2 = [Math.floor(Math.random() *6)+1]
          p1.src="/images/dice"+value1+".png"
          p2.src="/images/dice"+value2+".png"
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
   
  })