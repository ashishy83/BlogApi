const express = require("express");
const BlogPost = require("./models/blogpost");
const app = express();
app.use(express.json())
const port = 8080;

const connectDB = require('./utils/db');
 

let blogPosts = []
// app.post("/blog", async (req, res) => {

//   let blogPost = new BlogPost({
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author,

//   });
//   blogPost = await blogPost.save();
//   res.send(blogPost);
// }); 


app.post('/blog',(req,res)=>{
  const post = req.body;
  post.id = blogPosts.length + 1;
  blogPosts.push(post);
  res.status(201).json(post);
});

app.get('/blog',(req,res)=>{
  res.json(blogPosts);
});

app.get('/blog/id:',(req,res)=>{
  const postId = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === postId);
  if(post){
    res.json(post);
  }
  res.status(404).send("Post not Found")
});

app.delete('/blog/:id',(req,res)=>{
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex(p => p.id === postId);
  if(postIndex > -1){
    blogPosts.splice(postIndex,1);
    res.status(204).send();
  }
  res.status(404).send("Post not found")
})

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`App is running on ${port}`);
  } catch (error) {
    console.log("Error ==> ", error);
  }
});
