const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  timestamps: { type: Date, default: Date.now() }, //this will add createdAt and updatedAt to our schema automatically
});

const BlogPost = mongoose.model('BlogPost',blogSchema);

module.exports = BlogPost;


