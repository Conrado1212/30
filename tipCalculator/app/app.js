const billValue = document.getElementById('billValue');
const peopleValue = document.getElementById('peopbleInp');
const focus = document.getElementsByClassName('bill-value')[0];
const focusPeople = document.getElementsByClassName('people-value')[0];
const tip = document.querySelectorAll('.template button');


billValue.addEventListener('focus',()=>{
    focus.style.border = "2px solid var(--Green400)"
})

billValue.addEventListener('blur',()=>{
    focus.style.border = "none"
})


peopleValue.addEventListener('focus',()=>{
    focusPeople.style.border = "2px solid var(--Green400)"
})

peopleValue.addEventListener('blur',()=>{
    focusPeople.style.border = "none"
})