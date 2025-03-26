const checkboxes  = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function check(e){
    //check is the had ths shift key down
let inBetween = false;
    if(e.shiftKey && this.checked){
        //go 
        checkboxes.forEach(checkbox =>{
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log('Start to check inBetween');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', check));


