import express from "express"
import bodyParser from "body-parser"


const app =express();
const port  = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const items = ["All", "Technology", "Startup", "LifeStyle", "Finance"];


app.use(express.static("style"));

app.get('/',(req,res)=>{
    
    res.render("index.ejs", {items})
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})