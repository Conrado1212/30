import express from "express"
import bodyParser from "body-parser"


const app =express();
const port  = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const data = {
  logo: "QuickBlog",
  items:  ["All", "Technology", "Startup", "LifeStyle", "Finance"],
  titleContent: "A place to express, create, and let your voice be heard."
}


app.use(express.static("style"));

app.get('/',(req,res)=>{
    
    res.render("index.ejs",data)
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})