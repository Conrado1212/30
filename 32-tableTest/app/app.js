function add(){

    //pobranie tabeli e
    const t1 = document.getElementById('table1').getElementsByTagName('tbody')[0];

    //pobranie przycisku 
    const buttonR = document.getElementById('button-tr');
    //pobranie tabli drugiej 
    const t2 = document.getElementById('table2').getElementsByTagName('tbody')[0];;


    //pobranie pierwszego wiersza tablicy
    const fRow = t1.rows[0];

    //sprawdzenien dlugosci tablicy 
    const cellCount = fRow.cells.length;

    //tworzenie nowego wiersza w tabeli  poprze zparametr id tabeli 
    const createRow = (tableId) =>{
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
    
    //pobranie wszystkich ta z drugiej tabeli 
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



