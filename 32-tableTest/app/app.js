function add(){

    //pobranie tabeli e
    const t1 = document.getElementById('table1').getElementsByTagName('tbody')[0];

    //pobranie przycisku 
    const buttonR = document.getElementById('button-tr');
    //pobranie tabli drugiej 
    const t2 = document.getElementById('table2').getElementsByTagName('tbody')[0];;


    //pobranie pierwszego wiersza tablicy
    const fRow = t1.rows[0];

    //sprawdzenien dlugosci komorek w wierszutablicy 
    const cellCount = fRow.cells.length;

    //tworzenie nowego wiersza w tabeli  poprze zparametr id tabeli 
    const createRow = (tableId) =>{
        console.log(tableId, 'teableID');
        //stworzneie nowego wiersza 
        const nr = document.createElement('tr');
        //for po wszystkich wiersach 
    for(let i =0;i<cellCount;i++){
        //stworzneie nowego tabal data 
        const newCell = document.createElement('td');
        if(i===0){
            //dla td rownego 0 ma byc img 
            newCell.innerHTML = `<img src="" alt="" class="img-config">`;
        }else if(i===1){
            //dla td rownego 1 ma byc input 
            const input = document.createElement('input');
            //typ unputu text 
            input.type = 'text';
            //nazwa classy inputu input parametry tabeli plus dlugosc wiersza 
            input.className = `input${tableId}-${t1.rows.length}`;
            //podpiecie pod nowy wiersz 
           newCell.appendChild(input);
            
        }else{
            //dla innych td dodnaie inneHTM w nastepujacy spsoob 
            newCell.innerHTML = `Nowa ddddd ${i+1}`;
        }
       //dodanie nowego wiersza
        nr.appendChild(newCell);
        
        
    }
    //zwrocenie nowego wierza 
    return nr;
};
    //insert wiersza przed przyciskiem 
      t1.insertBefore(createRow('table1'), buttonR);
      //inset wiersza 
      t2.appendChild(createRow('table2'));
     //fubnkcja dodajac wartosci danych 
      addData();
    


}
function addData(){
    // const inputs1 = document.querySelectorAll('#table1 td:nth-child(2) input[type="text"]');
   
    // const inputs2 = document.querySelectorAll('#table2 td:nth-child(2) input[type="text"]');

    //pobranie wszystkich td z pierwszej tabeli 
    const inputs2test = document.getElementById('table1').getElementsByTagName('td');

   
    
    //pobranie wszystkich td z drugiej tabeli 
    const inputs3test = document.getElementById('table2').getElementsByTagName('td');

    //for po 1 tavbeli 
    for(let i=0;i<inputs2test.length;i++){

        //pobranie inputow z tabeli 1
      let xd = inputs2test[i].getElementsByTagName('input');

      // przypisanie warotsic sprawdzam czy inputs3test[i] istnieje jesli tak pobierz inputa dla indeksu
      let xd2 = inputs3test[i] ? inputs3test[i].getElementsByTagName('input') : [];
     //   console.log(xd2);
       for(let j=0;j<xd.length;j++){
           //nasluchiwnaie n apinuta danmego inputa 
           xd[j].addEventListener('input', ()=>{
               console.log(`test ${xd[j].value}`);
               if(xd2[j]){
                   //dodanie wartyosci danemu inputowi w drugiej tablicu 
                   xd2[j].value = xd[j].value;
               }
           });
           if(xd2[j]){
               //nasluchiwanie w druga strone 
            xd2[j].addEventListener('input',()=>{
                console.log(`test ${xd2[j].value}`);
                if(xd[j]){
                    //przypisanie wartosci 
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



 function addData3(){
    let input = document.querySelectorAll('#table1 tr input');
    let input2 = document.querySelectorAll('#table1 tr input');

    input.forEach((inp, index) => {
        let inp2  = input2?.[index];

        inp.addEventListener('input', ()=>{
            if(inp2){
                inp2.value = inp.value;
            }
        })
        if(inp2){
            inp2.addEventListener('inpu',()=>{
                inp.value = inp2.value;
            });
           
        }
    });
 }



//  document.getElementById('table1').addEventListener('input', (event) => {
//     const target = event.target;

//     if (target.tagName === 'INPUT') {
//         // Znajdź odpowiadający element docelowy
//         const rowIndex = Array.from(target.closest('tr').parentNode.children).indexOf(target.closest('tr'));
//         const table2Input = document.querySelector(`#table2 tr:nth-child(${rowIndex + 1}) input`);

//         if (table2Input) {
//             table2Input.value = target.value;
//         }
//     }
// });
/*
function addDFata2(){
    const table1r = document.querySelectorAll('#table1 tr');
    const table2r = document.querySelectorAll('#table2 tr');

    //szukanie inputow 

    table1r.forEach((row, index) =>{
        //lecimy po wszytkich trkach 
        const inputs1 = row.querySelectorAll('input');
        //indekx trki 
        const inputs2 = table2r[index]?.querySelectorAll('input');
        
        //po wsyzskitch inputach 
        inputs1.forEach((input1, input1index) =>{
            const input2 = inputs2?.[input1index]

            input1.addEventListener('input', ()=>{
                if(input2){
                    input2.value = input1.value;
                }
            });
            if(input2){
                input2.addEventListener('input', ()=>{
                    input1.value = input2.value;
                }) 
            }

        })

    });
}
*/


 if(!document.getElementById('overlay')){
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "overlay";
  
  
  
    const popup = document.createElement("div");
    popup.className = "popup";
  
   
    const message = document.createElement("h1");
    message.textContent = "AttName";
  
    const iframe = document.createElement('iframe');
    iframe.src = "";
    iframe.id = "iframe";
    const button = document.createElement("button");
    button.textContent = "AttName";
    button.onclick = closePopup;
  
   

    popup.appendChild(message);
    popup.appendChild(iframe);
    popup.appendChild(button);
  
  
    overlay.appendChild(popup);
  

    document.body.appendChild(overlay);
  }
  
  function closePopup() {
    const overlay = document.getElementById("overlay");
    overlay ?  overlay.style.display = "none" : false;
    
  }






addData();
console.log(addData());

function preview(value){
 const idOver =  document.getElementById('overlay');

 const ifremek = idOver.getElementsByTagName('iframe')[0];
 
 idOver.style.display = "flex";

 ifremek.src = value;





 ifremek.onload = function(){

    ifremek.contentWindow.postMessage('adadada', '*');

    // const iframeDoc = ifremek.contentDocument || ifremek.contentWindow.document;
    // ifremek.style.height = iframeDoc.body.scrollHeight + 'px';
    // ifremek.style.width = iframeDoc.body.scrollWidth + 'px';
 };


 window.addEventListener('message', function(e){
   if(e.data.type ==='adadada'){
    const iframe = document.getElementById('iframe');
    iframe.style.width = e.data.width + 'px';
    iframe.style.height = e.data.height + 'px';
   } 
 })

}



//nasluch pliku 
document.getElementById('file').addEventListener('change', function(e) {
    console.log('filek');
    //zmienna file 
    const file = e.target.files[0];
    if (file) {
        //reader
        const reader = new FileReader();
        //na ladowanie
        reader.onload = function(e) {
            //contents pliku 
            const contents = e.target.result;
            //wiersze
            const rows = contents.split('\n');
            rows.forEach(row => {
                //kolumnna dla wiersza 
                const cols = row.split(',');
                //wiersz
                const tr = document.createElement('tr');
                //pobranie tabeli 
                const t1 = document.getElementById('table1').getElementsByTagName('tbody')[0];
                //pobranie przycisku 
                const buttonR = document.getElementById('button-tr');
                cols.forEach(col => {
                    //stworzenie td
                    const td = document.createElement('td');
                    //dodanie text kontent ldas stworznoego td 
                    td.textContent = col.trim();
                    //wstawienie td do tr 
                    tr.appendChild(td);
                });
                //wstawienie przed przyciskiem wierszy z danymi 
                t1.insertBefore(tr,buttonR);
            });
        };
        reader.readAsText(file);
    } else {
        alert('Wybierz plik.');
    }
});






const xd = document.getElementById('file');
 function testxd(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                
                reader.onerror = (error) => {
                    reject(error);
                };
                
                reader.readAsText(file);
            });
        }
//funkcje nasluchujaca 
  xd.addEventListener('change', (e) => {
            const testFile = e.target.files[0];
            
            if (testFile) {
               setTimeout(()=>{
                    testxd(testFile).then((data) => {
                   console.log('testFFFFF');

                }).catch((error) => {
                    console.error('Error: ', error);
                });
                },2000);
}
        });




        // function loadData() {
        //     const fileInput = document.getElementById('file');
        //     const file = fileInput.files[0];
        //     if (file) {
        //         const reader = new FileReader();
        //         reader.onload = function(e) {
        //             const data = JSON.parse(e.target.result);
        //             document.getElementById('name').value = data.name;
        //             document.getElementById('email').value = data.email;
        //         };
        //         reader.readAsText(file);
        //     } else {
        //         alert('Please select a file.');
        //     }
        // }



//nasluchinanie na zmiane na inpucie 
        document.getElementById('file').addEventListener('change', function() {
            const file = this.files[0] ? this.files[0].name : 'No file';
            document.getElementById('fileName').textContent = file;
        });




        //funckja sortuja p[rzekaznie id kolumny przykladowo 0 -> pierwsza kolumna
        function sortTable(columnIndex) {
            //pobranie tabeli
            const table = document.getElementById("table1");
            console.log(table);
            // pobranie wierszy
            const rows = Array.from(table.rows).slice(1,-1); 
            console.log(rows);
            //czy numer
           const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText.trim());
           console.log(isNumeric);

           rows.sort((a,b)=>{
               const aT = a.cells[columnIndex];
               //console.log(aT);
               const bT = b.cells[columnIndex];
              // console.log(bT);

              const aTT = aT.querySelector("input") ?  aT.querySelector("input").value.trim() : aT.innerText.trim();


              const bTT = bT.querySelector("input") ?  bT.querySelector("input").value.trim() : bT.innerText.trim();

               return isNumeric ? parseFloat(aTT) - parseFloat(bTT)  : aTT.localeCompare(bTT);
           });
           rows.forEach(row =>{
            console.log('first', table.tBodies[0].firstChild);
            console.log('Wiersze dddd', row);
            //insert przed przucisk 
            table.tBodies[0].insertBefore(row, table.tBodies[0].firstChild);
              });
           console.log(rows); 
          }
         
         

       
        
    //filterek

    document.getElementById("filterInput").addEventListener("keyup", function() {
        const filterValue = this.value.toLowerCase();
        const table = document.getElementById("table1");
        console.log(table);
        //nie pobiermay pierwszej kolumny i ostaniej bo button
        const rows = Array.from(table.rows).slice(1,-1); 
        console.log(rows);

        rows.forEach(row => {
            //pobranie wszystkich td z danego wiersza 
          const cells = row.querySelectorAll("td");

          const rowText = Array.from(cells).map(cell => {
              //pobranie inputow
              const input = cell.querySelector("input");
              //w zaleznosci czy value czy tekst 
              return input ? input.value.toLowerCase() : cell.textContent.toLowerCase()
            }).join(" ");
          console.log('test', rowText);
          //sprawdzamy cyz dany td w rowie ma tekst jesli tak to display " " jelsi nie top o row dispaly none 
          row.style.display = rowText.includes(filterValue) ? "" : "none";
        });
      });



