const billValue = document.getElementById('billValue');
const peopleValue = document.getElementById('peopbleInp');
const custom = document.getElementById('customBtn');
const tipValue = document.getElementById('tipValue');
const totalValue = document.getElementById('totalValue');
const reset = document.getElementById('reset');
const info = document.getElementById('info');
const infoBill = document.getElementById('infoBill');
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
    peopleValue.placeholder ='';
});

peopleValue.addEventListener('blur',()=>{
    focusPeople.style.border = "none"
    peopleValue.placeholder ='0';
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
    window.location.reload();
    // console.log('clicked');
    // totalValue.textContent="0.00";
    // tipValue.textContent="0.00";
    // tipValue.textContent="0.00";
    // billValue.value="0";
    // peopleValue.value="0";
    // tip.forEach(el=> el.classList.remove('activeBtn'));
})


tip.forEach(item => {
    item.addEventListener('click',()=>{
        tip.forEach(el=> el.classList.remove('activeBtn'));
        item.classList.add('activeBtn');
        const tipText = item.textContent;
        const tipVal = parseInt(tipText.replace('%',''));
        if(billValue.value !=='' & peopleValue.value !== ''){
            calculate(
                parseFloat(billValue.value),
               tipVal,
                parseInt(peopleValue.value)
            )
        }else if(billValue.value !=='' & peopleValue.value === ''){
            info.style.display ="block";
        }else{
            info.style.display ="block";
            infoBill.style.display ="block";
        }
       
    })
});

function calculate(billValue,tip,person){
    if (isNaN(billValue) || isNaN(tip) || isNaN(person) || person <= 0) {
        console.log("Incorrect Data");
        return;
    }
    const tipAmount = (billValue * (tip/100)) /person;
    console.log(tipAmount);
    console.log(billValue / person);
    const totalPerPerson = ((billValue+ tipAmount) / person) ;

    tipValue.textContent =  `${tipAmount.toFixed(2)}`;
    totalValue.textContent = `${totalPerPerson.toFixed(2)}`;
}