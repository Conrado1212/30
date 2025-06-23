const express = require("express");
const cors = require("cors"); 
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');


app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'main')));
app.use((req,res, next)=>{
    console.log('Request Headers:', req.headers);
    const resSend = res.send;
    res.send = function(body){
        console.log('Res Body:', body);
        resSend.call(this, body);
    }
    next();
});
const dynamic ={};

//endpointy, tablica przechowującą nazwy endpointów.
//const endpoints =[];
//id
let id = 1;
//tworzenie nowego endpointu 
app.post('/new', (req,res)=>{
    
    const { endpoint,description, data } = req.body;
    //dodanie nowego endpointu 

    if(!endpoint || !data || typeof data !== 'object'){
       return res.status(400).json({ error: "Missing 'endpoint' or 'data' in request body or 'data is not valid JSON" })
    }
//wczesniejsza opcja
    // if(!dynamic[endpoint]){
    //     dynamic[endpoint] = [];
    //    // endpoints.push(endpoint);
    // }


    if(dynamic[endpoint]){
       return res.status(409).json({
           error: `Endpoint ${endpoint} already exists`
       });
       // endpoints.push(endpoint);
    }else{
        dynamic[endpoint] = {
            description: description || "",
            data: [] 
        };
    }



    //id ++
    //id++;
    //dodanie id oraz danych do stworzonego endpointu
    const newID = {
        id:id,
     //   description: description || "",
        ...data
    }
    dynamic[endpoint].data.push(newID);
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
        description: description || "",
        message: `Endpoint has been successfully created`,
      //  method: `The method post /${endpoint}, get /${endpoint} , get /${endpoint}/:id , del /${endpoint}/:id `,
        data: dynamic[endpoint]
 });

 //console.log('Endpoints name', endpoints);
 console.log(`${endpoint}`, dynamic[endpoint]);
});

//susuniecie dane endpointu przykladowo usawam caly endpoint test z raportow 
app.delete(`/del/:endpointName`, (req,res)=>{
    const {endpointName} = req.params;
    if(dynamic[endpointName]){
        delete dynamic[endpointName];
        res.json({message: `Successfully del endpoint ${endpointName}`})
    }else{
        res.status(404).json({
            error: `Endpoint ${endpointName} not found`
        });
    }
  
});



function mergeWithBlueprint(data, blueprint) {
    
    if (Array.isArray(blueprint)) {
      const model = blueprint[0];
      if (Array.isArray(data)) {
        return data.map(item => mergeWithBlueprint(item, model));
      } else {
        return mergeWithBlueprint(data, model);
      }
    }
  
  
    if (typeof blueprint === "object" && blueprint !== null) {
      let newData = {};
      for (const key in blueprint) {
        if (blueprint.hasOwnProperty(key)) {
          
          const originalVal = data && data.hasOwnProperty(key) ? data[key] : undefined;
          newData[key] = mergeWithBlueprint(originalVal, blueprint[key]);
        }
      }
      return newData;
    }
  
   
    return data !== undefined ? data : blueprint;
  }







app.patch(`/upd/:endpointName`, (req,res)=>{

    console.log("Request Body:", req.body);

    const {endpointName} = req.params;
   

    console.log("Dynamic object:", dynamic);
    console.log("Endpoint name:", endpointName);

    if(!dynamic[endpointName]){
return res.status(404).json({
    error: `Endpoint ${endpointName} not found`
})
    }

    const blueprint = Array.isArray(req.body) ? req.body[0] : req.body;



    console.log("Blueprint:", blueprint);

  
  const updatedData = Array.isArray(dynamic[endpointName])
    ? dynamic[endpointName].map(item => mergeWithBlueprint(item, blueprint))
    : mergeWithBlueprint(dynamic[endpointName], blueprint);

  console.log("Updated Data:", updatedData);
  dynamic[endpointName] = updatedData;

    res.json({
        message: `Endpoint ${endpointName} updated successfully`,
        data: dynamic[endpointName]
    })
});
  //statusy


const statusy =[{
    path: '/200ok', status: 200, body:{message: "OK"}
},
{
    path: '/201created', status: 201, body:{message: "Created"}
},
{
    path: '/204noContent', status: 204, body: null
},
{
    path: '/400bad-request', status: 400, body:{error : "Bad Request"}
},
{
    path: '/401unauthorized', status: 401, body:{error : "unauthorized"}
},
{
    path: '/403forbidden', status: 403, body:{error : "forbidden"}
},
{
    path: '/403forbidden', status: 403, body:{error : "forbidden"}
},
{ 
    path: '/404not-found', status: 404, body: { error: "not Found" } 
},
{ 
    path: '/500internal-error', status: 500, body: { error: "Internal error" } 
},
{
     path: '/502bad-gateway', status: 502, body: { error: "Bad Gateway" } 
    },
{ 
    path: '/503service-unavailable', status: 503, body: { error: "Service Unavailable" } 
}
];

statusy.forEach(({path, status, body})=>{
    app.get(path, (req,res)=>{
        if(body!==null){
            res.status(status).json(body);
    } else {
      res.sendStatus(status);
    }
})
})



//wszystkie endpointy
app.get(`/dynamic`,(req,res)=>{
    //dynamiczne logowanie endpointow 
    console.log("curr", dynamic);
    if(Object.keys(dynamic).length >0){
     const allEndpoints =   Object.entries(dynamic).map(([endpoint, value]) =>({
         endpoint,
         description: value.description,
         data: value.data,
         count: value.data.length
       }))
       res.json({message: "Avaliable dynamic endpoints:",
        endpoints: allEndpoints})
    }else{
    //    res.status(404).json({error: "Dynamic is empty"});
    res.json({
        message: "No dynamic endpoints available",
        endpoints: []
    })
    }
    
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
       dynamic[endpoint].data.push(newData);
        console.log(`Request Method: ${req.method} ${req.url}`);
        console.log("body:", req.body);
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
    const {endpoint,id} = req.params;
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

  

    app.listen(port, "0.0.0.0", () => {
        console.log(`App working at http://localhost:${port} and http://192.168.0.50:${port}`);
    });




  



        
        
  