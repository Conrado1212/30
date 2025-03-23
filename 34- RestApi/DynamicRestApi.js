const express = require("express");
const port = 3000;
const app = express();

const dynamic ={};
//endpointy
const endpoints =[];
//id
let id = 0;
//tworzenie nowego endpointu 
app.post('/new', (res,req)=>{
    
    
 
})






app.listen(port, ()=>{
    console.log(`App working at http://localhost:${port}`);
})