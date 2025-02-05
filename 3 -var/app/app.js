
const all = document.querySelectorAll('.controls input');



function update(){
    //console.log(this.value);
    const suffiks = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffiks);
    console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffiks));
}

all.forEach(all=> all.addEventListener('change',update));
all.forEach(all=> all.addEventListener('mousemove',update));

