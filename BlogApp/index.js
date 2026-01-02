import express from "express"
import bodyParser from "body-parser"
import multer from "multer";

const app =express();
const port  = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


const storage = multer.diskStorage({
  destination :(req, file, cb)=>{
    cb(null, "style/images");
  },
  filename: (req, file, cb)=>{
    cb(null, file.originalname);
  }
});

const upload = multer({storage})

const data = {
  logo: "QuickBlog",
  items:  ["All", "Technology", "Startup", "Lifestyle", "Finance"],
  titleContent: "A place to express, create, and let your voice be heard.",
  newsContent: "Subscribe to get the latest blog, new tech, and exclusive news.",
  delContent: "Are you sure want to delete this blog page?"
}
const links = [{
  id:1,
  title: "Quick Links",
  links:  ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
},
{
  id:2,
  title: "Need Help?",
  links:  ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
},
{
  id:3,
  title: "Follow Us",
  links:  ["Instagram", "Twitter", "Payment Methods", "Facebook", "YouTube"]
}
];

links.forEach(el=>{
  console.log(el.id);
  // el.links.forEach((link, i)=>{
  //   console.log(link);
  // })
  for(let i=0;i<el.links.length;i++){
    console.log(el.links[i]);
  }
})
const blogArt = [{
  id: 1,
  title: "Step-by-step lifestyle management guide",
  desc: "His is a practical, human-first roadmap. Keep it realistic, iterate weekly, and measure progress with simple, visible signals.",
  img:"images/lif1.jpg",
  type: "Lifestyle",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vitae sapien pharetra, imperdiet scelerisque mi rhoncus. Fusce eleifend, quam egestas consectetur auctor, sem tellus lacinia tortor, vel molestie tortor nunc in ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dictum, ipsum eu molestie faucibus, magna orci ullamcorper mi, non laoreet mauris dolor congue ligula. Nullam vulputate turpis sit amet placerat faucibus. Ut blandit gravida nulla, at luctus ligula vulputate a. Nam sollicitudin turpis eget pulvinar pharetra. Aliquam sit amet pellentesque magna. Mauris in tellus at magna molestie convallis. Pellentesque consectetur lorem a diam blandit ornare. Morbi lacinia lobortis lacus vel aliquam. Duis quis imperdiet massa. Mauris ut nisl quis tellus mattis tristique. Donec in quam vel justo consequat placerat. Proin auctor sodales felis, ultricies convallis nisl auctor non. Nam volutpat neque a justo fringilla porta. Phasellus quis est consequat, ornare leo in, rhoncus turpis. Duis tempor, enim nec pretium laoreet, justo lectus interdum augue, eu blandit odio sem at est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sit amet lectus in sapien tempor imperdiet vel eu ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent mattis libero sit amet risus efficitur fermentum. Vivamus vestibulum a tellus nec aliquam. Pellentesque iaculis mi dolor, et sodales libero convallis vitae. Donec porttitor imperdiet elit, in aliquam augue. Sed porttitor, nunc quis vestibulum eleifend, sem lectus lobortis felis, ac iaculis est est in leo. Aenean malesuada massa vitae nulla gravida, quis bibendum est consequat. Phasellus laoreet nibh vitae eleifend pulvinar. Aliquam in efficitur nunc. Curabitur auctor id tortor quis condimentum. Mauris rutrum ut felis aliquet interdum. Phasellus vel elit nec augue varius porta nec eget massa. Nam gravida pellentesque eleifend. Ut quis libero libero. Nulla vel mi sagittis lectus dignissim placerat. Curabitur sed condimentum sem. Maecenas auctor at tortor quis feugiat. Nam diam augue, scelerisque eget faucibus vitae, vestibulum ac diam. Sed faucibus varius risus, eu lacinia enim faucibus ut. Nullam sed bibendum augue, non congue justo. Duis commodo ornare luctus. Integer vel bibendum diam. Nunc aliquam volutpat risus, id malesuada metus condimentum vel. Quisque ut purus tincidunt, consequat nulla vel, mattis neque. Praesent ac ex eget nisi tristique posuere id ac est. Nullam pretium ipsum id volutpat facilisis. Aliquam dictum tristique risus, sed maximus dui aliquet auctor. Aenean gravida dictum mi eu suscipit. Vivamus sit amet tempor purus, in dignissim tortor. Morbi imperdiet auctor vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam efficitur rutrum est. Phasellus vitae nunc nulla. Vivamus vitae bibendum sapien. Duis purus ante, sodales ac commodo a, cursus quis orci. Cras non tempus massa. Donec odio ante, vulputate ac ullamcorper quis, euismod a lectus. Proin pretium dictum enim eget rhoncus. Nunc auctor tortor congue, tempor nibh at, sagittis lorem. Sed eu tincidunt quam. Aenean varius dui a erat pellentesque, sit amet tincidunt dui semper. Nullam in mi eget dui elementum bibendum. Suspendisse sit amet diam et massa laoreet feugiat at eu ligula. Phasellus sollicitudin a mi ut congue. Nulla malesuada justo sit amet metus luctus, eu fermentum dolor egestas. Nullam consectetur volutpat purus, malesuada scelerisque tortor luctus non. Proin eu sem lobortis, convallis urna et, finibus nunc. Suspendisse euismod tellus vitae lectus dictum, et blandit justo posuere. Mauris tellus sapien, vulputate et commodo sit amet, euismod vulputate odio. Donec eget ipsum vulputate, luctus nunc et, porta lacus."
},
{
  id: 2,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/start.jpg",
  type: "Startup",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 3,
  title: "Building a clear roadmap for your startup success",
  desc: "Creating an effective startup roadmap is about turning vision into structured, actionable steps. This guide walks you through.",
  img:"images/tech.jpg",
  type: "Technology",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor.Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 4,
  title: "Unlocking the Full Potential of Your Apps",
  desc: "From customization to cloud sync — here’s how to transform everyday software into powerful productivity tools.",
  img:"images/tech1.jpg",
  type: "Technology",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 5,
  title: "Skill Up & Capture Life",
  desc: "Boost your abilities with smart tools while preserving the milestones that matter most.",
  img:"images/lif2.jpg",
  type: "Lifestyle",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 6,
  title: "Efficiency First: Boosting Startup Returns",
  desc: "A guide to building a high‑impact startup by focusing on efficiency, validation, and smart resource use.",
  img:"images/start2.jpg",
  type: "Startup",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 7,
  title: "Luxury Home Taxes: Market Shifts Explained",
  desc: "Explore how high‑value property taxation reshapes demand, investment strategies, and future housing trends.",
  img:"images/finance.jpg",
  type: "Finance",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 8,
  title: "Learning Reinvented",
  desc: "Forget rote memorization — embrace a smarter, personalized, and engaging way to study.",
  img:"images/start3.jpg",
  type: "Startup",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 9,
  title: "Tourism as a Global Game‑Changer",
  desc: "Explore how tourism drives economies, fosters innovation, and reshapes international relations.",
  img:"images/life3.jpg",
  type: "Lifestyle",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
},
{
  id: 10,
  title: "AI Everywhere",
  desc: "From smart assistants to predictive analytics — AI is transforming industries and shaping the future.”",
  img:"images/tech2.jpg",
  type: "Technology",
  information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi tortor, maximus vel eros ac, aliquam sagittis nibh. Ut convallis commodo tortor vel rhoncus. Mauris non felis sit amet nibh placerat gravida nec quis lacus. Duis lacus enim, sollicitudin sed feugiat eget, finibus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ipsum massa, viverra in malesuada vitae, luctus vel tortor. Donec imperdiet pretium iaculis. Vivamus eu ipsum eget augue rutrum vestibulum. Donec eget mollis ligula. Etiam metus metus, fringilla vitae pretium eu, suscipit ut odio. Pellentesque semper purus quis sollicitudin efficitur. Quisque fringilla tellus eros, nec ultrices diam rutrum a. Quisque nec sollicitudin justo. Pellentesque sed ex enim. Aliquam a volutpat augue, at dapibus tortor. Mauris efficitur mi et nunc faucibus, ut aliquet elit varius. Pellentesque facilisis neque aliquam, porttitor eros sed, venenatis risus. Donec posuere mi mi, ut ornare sem tincidunt ac. Ut varius, mi blandit laoreet convallis, lorem turpis cursus risus, et tempor turpis leo sed mauris. Duis ut nisi sed quam ornare laoreet. Nulla pellentesque orci ac magna interdum congue. Fusce vulputate purus quis justo pretium, sit amet pharetra ante vulputate. Nulla facilisi. Curabitur sit amet est varius, feugiat leo et, blandit nulla. Donec turpis eros, porttitor non enim quis, scelerisque luctus est."
}
]

blogArt.forEach(el=>{
  console.log(el.id);
  if(el.title.includes('Tour')){
    console.log(el.title);
  }

})
for(let i=0;i<blogArt.length;i++){
  console.log('aadsadad',blogArt[i].id);
}
const index = blogArt.findIndex(e=>e.id ===1);
console.log(blogArt[index]);
app.use( express.static("style"));

app.get('/', (req,res)=>{
    
    res.render("index.ejs",{
      data: data,
      blogArt: blogArt,
      links: links
    });
});

app.get(`/blogs`, (req,res)=>{
    res.json(blogArt.length > 0 ? blogArt :{message: "No data available"})
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
    return res.json({message: `BlogPage with id ${id} was successfully deleted`});
  
});

/*update blog*/
app.put(`/blog/:id`,(req,res)=>{
  const {id} = req.params;
  const parseID = parseInt(id);

  if(isNaN(parseID)){
    return res.status(400).json({error: "Invalid ID fromat"})
  }

  const index = blogArt.findIndex(e=>e.id ===parseID);
  console.log(index);
  if (index === -1) {
    return res.status(404).json({ error: `Item with ID: ${id} not found` });
  }
  blogArt[index] = {
    ...blogArt[index],
    ...req.body
  }
  console.log(`Request Method: ${req.method} ${req.url}`);
  console.log(req.body);
  return res.json({message: `Item with id ${id} was successfully updated`});
  
});


/*get blog */


app.get(`/blog/:id`,(req,res)=>{
  const {id} = req.params;
  const parseID = parseInt(id);

  if(isNaN(parseID)){
    return res.status(400).json({error: "Invalid ID fromat"})
  }

  const index = blogArt.findIndex(e=>e.id ===parseID);
  console.log(index);
  if (index === -1) {
    return res.status(404).json({ error: `Item with ID: ${id} not found` });
  }
  console.log(`Request Method: ${req.method} ${req.url}`);
  console.log(blogArt[index]);
  return res.json(blogArt[index]);
});




/*blog page */

app.get(`/blogPage/:id`,(req,res)=>{
  const {id} = req.params;
  const parseID = parseInt(id);

  if(isNaN(parseID)){
    return res.status(400).json({error: "Invalid ID fromat"})
  }

  const index = blogArt.findIndex(e=>e.id === parseID);
  console.log(index);
  if (index === -1) {
    return res.status(404).json({ error: `BlogPage with ID: ${id} not found` });
  }
  
  res.render("blog.ejs",{
    data: data,
    blogArt: blogArt[index]
  });
});



/*add blog*/

//console.log(Math.max(...blogArt.map(blog=>blog.id)));



app.post(`/new`, upload.single("image"),(req,res)=>{
  const id = Math.max(...blogArt.map(blog=>blog.id))+1
  const {title, desc, information, type} = req.body;
  const newBlog ={
    id:id,
    title,
    desc,
    information,
    img: "/images/"+req.file.filename,
    type
  }
  blogArt.push(newBlog);
  console.log(`Request Method: ${req.method} ${req.url}`);
  console.log("body:", req.body);
  res.status(201).json(newBlog);
})
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})