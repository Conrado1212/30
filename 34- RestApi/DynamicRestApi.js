const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
//obiekt, w którym przechowuje dane dynamicznie powiązane z nazwą endpointu
// {
//     "users": [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Jane Smith" }
//     ],
//     "products": [
//         { id: 3, name: "Laptop" },
//         { id: 4, name: "Phone" }
//     ]
// }
const dynamic ={};

//endpointy, tablica przechowującą nazwy endpointów.
const endpoints =[];
//id
let id = 0;
//tworzenie nowego endpointu 
app.post('/new', (req,res)=>{
    
    const { endpoint, data } = req.body;
    //dodanie nowego endpointu 

    (!endpoint || !data) ? res.status(400).json({ error: "Missing 'endpoint' or 'data' in request body." }) : false;

    !dynamic[endpoint] ? (dynamic[endpoint] = [], endpoints.push(endpoint)) : false;


    //id ++
    id++;

    //dodanie id oraz danych do stworzonego endpointu
    const newID = {
        id:id,
        ...data
    }
    dynamic[endpoint].push(newID);


    //dynamiczne logowanie endpointow 
     if(Object.keys(dynamic).length >0){
        Object.entries(dynamic).forEach(([endpoint, data])=>{
            console.log(`Endpoint :${endpoint}, data:`, data )
        });
     }else{
        console.log('Empty dynamic');
     }
    //zwrotka co stworzone 
    res.json({ 
        endpointName: `${endpoint}`,
        message: `Endpoint post /${endpoint}, get /${endpoint} , get /${endpoint}/:id został utworzony.`,
    data: dynamic[endpoint]
 });
});

//post danych do danego endpointu 
app.post('/:endpoint',(req,res)=>{
    const {endpoint} = req.params;
    if(!dynamic[endpoint]){
     return   res.status(404).json({ error: `Endpoint: ${endpoint} not exist`})
    }
       id++;
       const newData = {
           id: id,
           ...req.body
       };
       dynamic[endpoint].push(newData);
        console.log(`Request Method: ${req.method} ${req.url}`);
        res.status(201).json(newData);
   
   
});

//zwrotka wszystkiego z danego endpointu
app.get(`/:endpoint`,(req,res)=>{
    const {endpoint} = req.params;
    if(dynamic[endpoint]){
        res.json(dynamic[endpoint]);
        console.log(`Request Method: ${req.method} ${req.url}`);
    }else{
        res.status(404).json({ error: `Endpoint: ${endpoint} not exist`})
    }
   
});


//zwrotka po id z danego endpointu 
app.get(`/:endpoint/:id`, (req,res)=>{
    const {endpoint} = req.params;
    if(dynamic[endpoint]){
        const data = dynamic[endpoint].find(d=>d.id === parseInt(req.params.id));
        data ? res.json(data) : res.status(404).send(`${data} not found elo`);
        console.log(`Request Method: ${req.method} ${req.url}`);
        console.log('Request Headers:', req.headers);
        req.body ==='' ? '' : console.log('Request Body:', req.body);
        console.log('Response Body:', data);
    }else{
        res.status(404).json({ error: `Endpoint: ${endpoint} not exist`})
    }
});

app.delete(`/:endpoint/:id`,(req,res)=>{
    const {endpoint} = req.params;
    if(dynamic[endpoint]){
        //parsowanie id na liczbe
        const parsedID = parseInt(id);
        if(isNaN(parsedID)){
            //sprawdzenie formatu
            return res.status(400).json({ error: "Invalid ID format."});
        }
        //startowa dlugosc 
            const startLength = dynamic[endpoint].length;
            dynamic[endpoint] = dynamic[endpoint].filter(e=>e.id !==parsedID);
        //jesli id nie znalezione 
            if(dynamic[endpoint].length === startLength){
                return res.status(404).json({ error: `Item with ID: ${id} not found in endpoint: ${endpoint}.` });
            }
            console.log(`Request Method: ${req.method} ${req.url}`);
            //odp gdy usuwasz ladnie 
            return res.json({message: `Item with id ${id} was successfully deleted from endpoint: ${endpoint}`});
        }else{
            res.status(404).json({ error: `Endpoint: ${endpoint} not exist`})
        }
});


    app.put(`/:endpoint//:id`, (req,res)=>{
        const {endpoint} = req.params;
        //parsowanie
        const parsedID = parseInt(id);
        //sprawdzenie czy istnieje 
        if(!dynamic[endpoint]){
            res.status(404).json({ error: `Endpoint: ${endpoint} not exist`})
        }
        if(isNaN(parsedID)){
                //sprawdzenie formatu
                return res.status(400).json({ error: "Invalid ID format."});
        }
        //szukanie elementu 
        const dynamicEnd =  dynamic[endpoint].findIndex(e =>e.id === parsedID);
        //jesli nie istnieje 
       if(dynamicEnd === -1){
           return res.status(404).json({error: `Item with id: ${id} not found for endpoint ${endpoint}`})
       }
       //aktualizacja na podstawie danych body
       dynamic[endpoint][dynamicEnd] = {
           ...dynamic[endpoint][dynamicEnd],
           ...req.body
       };

       console.log(`Request Method: ${req.method} ${req.url}`);

       return res.json({message: `Item withid :${id} in endpoint ${endpoint} has been updated`, updatedItem: dynamic[endpoint][dynamicEnd]});

    });
//wszystkie endpointy
app.get(`/dynamic`,(req,res)=>{
     //dynamiczne logowanie endpointow 
     if(Object.keys(dynamic).length >0){
      const allEndpoints =   Object.entries(dynamic).map(([endpoint, data]) =>({
          endpoint,
          data  
        }))
        res.json({message: "Avaliable dynamic endpoints:",
         endpoints: allEndpoints})
     }else{
        res.status(404).json({error: "Dynamic is empty"});
     }
})
app.listen(port, ()=>{
    console.log(`App working at http://localhost:${port}`);
})