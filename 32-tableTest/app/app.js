function add(){
    const t1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
    const buttonR = document.getElementById('button-tr');
    const t2 = document.getElementById('table2').getElementsByTagName('tbody')[0];;

    const fRow = t1.rows[0];

    const cellCount = fRow.cells.length;
    //const nr = t1.insertRow(buttonR.rowIndex);
    const nr = document.createElement('tr');
    const nr2 = document.createElement('tr');
    
    

    for(let i =0;i<cellCount;i++){
        const newCell = document.createElement('td');
        const newCell2 = document.createElement('td');
        if(i===0){
            newCell.innerHTML = `<img src="" alt="" class="img-config">`;
            newCell2.innerHTML = `<img src="" alt="" class="img-config">`;
        }else if(i===1){
            newCell.innerHTML = `<input type="text">`;
            newCell2.innerHTML = `<input type="text">`;
        }else{
            newCell.innerHTML = `Nowa ddddd ${i+1}`;
            newCell2.innerHTML = `Nowa ddddd ${i+1}`;
        }
       
        nr.appendChild(newCell);
        nr2.appendChild(newCell2);
        
    }

      t1.insertBefore(nr, buttonR);
      t2.appendChild(nr2);
     
      


}