const buttons = document.querySelectorAll('.container div');
const resetBtn = document.getElementById('reset');
const tx = [];
const to = [];
const x = document.getElementById('X');
const o = document.getElementById('O');
const title = document.getElementById('title');
let player =''
const originalTitle = 'Play game or <span>choose player</span>';
x.addEventListener('click',()=>{
    playerTurn(x,o)
})

o.addEventListener('click',()=>{
    playerTurn(o,x)
})


buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(player ===''){
            title.textContent = 'Choose player';
            title.style.color = "red";
        }else{
            title.textContent = `Game on `;
            title.style.color = "white";
            button.textContent = player
            button.style.pointerEvents = "none";
    
            const index  = Array.from(buttons).indexOf(button);
    const currentPlayer = player
            if(currentPlayer === 'X'){
                tx.push(index)
                playerTurn(o,x)
            }else{
                to.push(index)
                playerTurn(x,o)
            }
            win(currentPlayer);
            checkdraw();
        }
        
    })
})
  


function playerTurn(x,d){
    x.classList.toggle('active');
    if(d.classList.contains('active')){
        d.classList.remove('active')
    }
    player = x.textContent
   
}


const patterns =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]

]
function win(currentPlayer){
   const currentMove = (currentPlayer ==='X') ? tx: to;
   for(let pattern of patterns){
       if(pattern.every(index => currentMove.includes(index))){
        title.textContent = `${currentPlayer} wins!`;
        title.style.color = "green";
        pattern.forEach((index,i) =>{
           // setTimeout(()=>{
                buttons[index].classList.add('win');
          //  },i*100);
            
        })
        disableButton();
        resetBtn.style.display ="block";
        break;
       }
   }
}
function disableButton(){
    buttons.forEach(button =>{
        button.style.pointerEvents = "none"
    })
}
function checkdraw(){
    const totalMoves = tx.length + to.length
    if(totalMoves === 9 && title.textContent.includes('Game on')){
        title.textContent = `Draw!`;
        title.style.color = "grey";
        resetBtn.style.display ="block";
    }
}
function reset(){
    tx.length = 0;
    to.length = 0;
    player = '';
    title.innerHTML = originalTitle;
    buttons.forEach(button => {
        button.textContent = '';
        button.style.pointerEvents = "auto";
        button.classList.remove("win");

    });

    x.classList.remove('active');
    o.classList.remove('active');
    resetBtn.style.display = "none";
}

resetBtn.addEventListener('click',reset);