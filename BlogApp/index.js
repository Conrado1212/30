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

const blogArt = [{
  id: 1,
  title: "Step-by-step lifestyle management guide",
  desc: "his is a practical, human-first roadmap. Keep it realistic, iterate weekly, and measure progress with simple, visible signals.",
  img:"images/life1.jpg"
},
{
  id: 2,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 3,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 4,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 5,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 6,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 7,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 8,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 9,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
},
{
  id: 10,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg"
}
]
  
app.use(express.static("style"));

app.get('/',(req,res)=>{
    
    res.render("index.ejs",data, blogArt)
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})