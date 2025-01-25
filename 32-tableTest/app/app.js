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
    const inputs1 = document.querySelectorAll('#table1 td:nth-child(2) input[type="text"]');
   
    const inputs2 = document.querySelectorAll('#table2 td:nth-child(2) input[type="text"]');

    
    const inputs2test = document.getElementById('table1').getElementsByTagName('td');
    
    const inputs3test = document.getElementById('table2').getElementsByTagName('td');

    for(let i=0;i<inputs2test.length;i++){
      let xd = inputs2test[i].getElementsByTagName('input');
      let xd2 = inputs3test[i] ? inputs3test[i].getElementsByTagName('input') : [];
     //   console.log(xd);
       for(let j=0;j<xd.length;j++){
           xd[j].addEventListener('input', ()=>{
               console.log(`test ${xd[j].value}`);
               if(xd2[j]){
                   xd2[j].value = xd[j].value;
               }
           });
           if(xd2[j]){
            xd2[j].addEventListener('input',()=>{
                console.log(`test ${xd2[j].value}`);
                if(xd[j]){
                    xd[j].value = xd2[j].value;
                }
               });
           }
          
       }
    }

   



//     inputs1.forEach((input, index)=>{
//         input.addEventListener('input', ()=>{
//             if(inputs2[index]){
//                 console.log(`Synchro ${input.value}`);
//                 inputs2[index].value = input.value;
               
//             }
            
//         })
//     });

// //druga tabela do peirszje 
//     inputs2.forEach((input, index)=>{
//         input.addEventListener('input', ()=>{
//             if(inputs2[index]){
//                 console.log(`Synchro ${input.value}`);
//             inputs1[index].value = input.value;
//             }
//         })
//     });
 }

addData();
console.log(addData());