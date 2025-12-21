import express from "express"
import bodyParser from "body-parser"


const app =express();
const port  = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const data = {
  logo: "QuickBlog",
  items:  ["All", "Technology", "Startup", "Lifestyle", "Finance"],
  titleContent: "A place to express, create, and let your voice be heard."
}

const blogArt = [{
  id: 1,
  title: "Step-by-step lifestyle management guide",
  desc: "His is a practical, human-first roadmap. Keep it realistic, iterate weekly, and measure progress with simple, visible signals.",
  img:"images/lif1.jpg",
  type: "Lifestyle"
},
{
  id: 2,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg",
  type: "Startup"
},
{
  id: 3,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/tech.jpg",
  type: "Technology"
},
{
  id: 4,
  title: "Unlocking the Full Potential of Your Apps",
  desc: "From customization to cloud sync — here’s how to transform everyday software into powerful productivity tools.",
  img:"images/tech1.jpg",
  type: "Technology"
},
{
  id: 5,
  title: "Skill Up & Capture Life",
  desc: "Boost your abilities with smart tools while preserving the milestones that matter most.",
  img:"images/lif2.jpg",
  type: "Lifestyle"
},
{
  id: 6,
  title: "Efficiency First: Boosting Startup Returns",
  desc: "A guide to building a high‑impact startup by focusing on efficiency, validation, and smart resource use.",
  img:"images/start2.jpg",
  type: "Startup"
},
{
  id: 7,
  title: "Luxury Home Taxes: Market Shifts Explained",
  desc: "Explore how high‑value property taxation reshapes demand, investment strategies, and future housing trends.",
  img:"images/finance.jpg",
  type: "Finance"
},
{
  id: 8,
  title: "Learning Reinvented",
  desc: "Forget rote memorization — embrace a smarter, personalized, and engaging way to study.",
  img:"images/start3.jpg",
  type: "Startup"
},
{
  id: 9,
  title: "Tourism as a Global Game‑Changer",
  desc: "Explore how tourism drives economies, fosters innovation, and reshapes international relations.",
  img:"images/life3.jpg",
  type: "Lifestyle"
},
{
  id: 10,
  title: "AI Everywhere",
  desc: "From smart assistants to predictive analytics — AI is transforming industries and shaping the future.”",
  img:"images/tech2.jpg",
  type: "Technology"
}
]

blogArt.forEach(el=>{
  console.log(el.id);
})
for(let i=0;i<blogArt.length;i++){
  console.log('aadsadad',blogArt[i].id);
}
const index = blogArt.findIndex(e=>e.id ===1);
console.log(blogArt[index]);
app.use(express.static("style"));

app.get('/',(req,res)=>{
    
    res.render("index.ejs",{
      data: data,
      blogArt: blogArt
    });
});


app.delete(`/blog/:id`,(req,res)=>{
  const {id} = req.params;
 
    const parseID = parseInt(id);
    if(isNaN[parseID]){
      return res.status(400).json({error: "Invalid ID fromat"})
    }
    const index = blogArt.findIndex(e=>e.id ===parseID);
    console.log(index);
    if (index === -1) {
      return res.status(404).json({ error: `Item with ID: ${id} not found` });
    }

    blogArt.splice(index, 1);
    console.log(`Request Method: ${req.method} ${req.url}`);
    return res.json({message: `Item with id ${id} was successfully deleted`});
  
});


app.put(`/blog/:id`,(req,res)=>{
  const {id} =req.params;
  const parseID = parseInt(id);

  if(isNaN[parseID]){
    return res.status(400).json({error: "Invalid ID fromat"})
  }

  const index = blogArt.findIndex(e=>e.id ===parseID);
  console.log(index);
  if (index === -1) {
    return res.status(404).json({ error: `Item with ID: ${id} not found` });
  }
  blogArt[index] = {
    ...req.body
  }
  console.log(`Request Method: ${req.method} ${req.url}`);
  return res.json({message: `Item with id ${id} was successfully updated`});
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})