const billValue = document.getElementById('billValue');
const peopleValue = document.getElementById('peopbleInp');
const custom = document.getElementById('customBtn');
const tipValue = document.getElementById('tipValue');
const totalValue = document.getElementById('totalValue');
const reset = document.getElementById('reset');
const customValue = document.getElementById('customValue');
const focus = document.getElementsByClassName('bill-value')[0];
const focusPeople = document.getElementsByClassName('people-value')[0];
const tip = document.querySelectorAll('.template button');


billValue.addEventListener('focus',()=>{
    focus.style.border = "2px solid var(--Green400)"
    billValue.placeholder ='';
});

billValue.addEventListener('blur',()=>{
    focus.style.border = "none"
    billValue.placeholder ='0';
});


peopleValue.addEventListener('focus',()=>{
    focusPeople.style.border = "2px solid var(--Green400)"
});

peopleValue.addEventListener('blur',()=>{
    focusPeople.style.border = "none"
});

custom.addEventListener('click',()=>{
    console.log('clicked');
    custom.querySelector('label').remove()
    customValue.style.display ="block";
    customValue.focus();
    custom.style.border = "2px solid var(--Green400)";
    custom.classList.add('active');
});

customValue.addEventListener('blur',()=>{
    customValue.style.display ="none";
    custom.style.border ="none";
    custom.classList.remove('active');
    const label = document.createElement("label")
    label.textContent="Custom";
    custom.appendChild(label);
});

reset.addEventListener('click',()=>{
    console.log('clicked');
    totalValue.textContent="0.00";
    tipValue.textContent="0.00";
    tipValue.textContent="0.00";
    billValue.value="0";
    peopleValue.value="0";
})