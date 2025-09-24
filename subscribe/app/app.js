const containerEl = document.getElementById('container')
const left = document.getElementById('left')
const right = document.getElementById('right')

const userEmail = document.getElementById('userEmail')
const valid = document.getElementById('valid')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submit-btn')

const confirmMes = document.getElementById('confirm')
const dismiss = document.getElementById('dismiss')


function succes(){
    confirmMes.classList.add('active');
    containerEl.classList.add('success');
    left.style.display = "none";
    right.style.display = "none";
}
function validate(email){
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(email)
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const emailVal = emailInput.value.trim();
    
    if(validate(emailVal)){
        succes();
        userEmail.innerText = emailVal;
        emailInput.value = '';

        valid.classList.remove('active');
        email.classList.remove('active');
    }else{
        valid.classList.add('active');
        email.classList.add('active');
    }
})

dismiss.addEventListener('click',()=>{
    left.style.display = "block";
    right.style.display = "block";
    containerEl.classList.remove('success');
    confirmMes.classList.remove('active');
})