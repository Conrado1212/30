const buttons = document.querySelectorAll('.container div');
const tx = [];
const to = [];
const x = document.getElementById('X');
const o = document.getElementById('O');
let player =''

x.addEventListener('click',()=>{
    playerTurn(x,o)
})

o.addEventListener('click',()=>{
    playerTurn(o,x)
})


buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        button.textContent = player
    })
})
  
function win(){

}

function playerTurn(x,d){
    x.classList.toggle('active');
    if(d.classList.contains('active')){
        d.classList.remove('active')
    }
    player = x.textContent
    //console.log(player);
}