document.querySelector('button').addEventListener("click",()=>{
    console.log('rest');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('body').classList.remove('blur');
})