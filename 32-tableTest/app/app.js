function add(){
    const t1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
    const buttonR = document.getElementById('button-tr');
    const t2 = document.getElementById('table2').getElementsByTagName('tbody')[0];;

    const fRow = t1.rows[0];

    const cellCount = fRow.cells.length;

 
    const createRow = (tableId) =>{
        const nr = document.createElement('tr');
    for(let i =0;i<cellCount;i++){
        const newCell = document.createElement('td');
        if(i===0){
            newCell.innerHTML = `<img src="" alt="" class="img-config">`;
        }else if(i===1){
            const input = document.createElement('input');
            input.type = 'text';
            input.className = `input${tableId}-${t1.rows.length}`;
           newCell.appendChild(input);
            
        }else{
            newCell.innerHTML = `Nowa ddddd ${i+1}`;
        }
       
        nr.appendChild(newCell);
        
        
    }
    return nr;
};

      t1.insertBefore(createRow('table1'), buttonR);
      t2.appendChild(createRow('table2'));
     
      addData();
    


}
function addData(){
    const inputs1 = document.querySelectorAll('#table1 input[type="text"]');
    const inputs2 = document.querySelectorAll('#table2 input[type="text"]');


    inputs1.forEach((input, index)=>{
        input.addEventListener('input', ()=>{
            if(inputs2[index]){
                console.log(`Synchro ${input.value}`);
                inputs2[index].value = input.value;
               
            }
            
        })
    });


    inputs2.forEach((input, index)=>{
        input.addEventListener('input', ()=>{
            if(inputs2[index]){
                console.log(`Synchro ${input.value}`);
            inputs1[index].value = input.value;
            }
        })
    });
}

addData();
console.log(addData());