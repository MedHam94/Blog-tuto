const express = require('express')
const router = express()
const Post = require('../models/Post')
// Get / 
// Home
router.get('', async (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog created with NodeJs, Express & MongoDb."
  }

  try {
    const data = await Post.find();
    res.render('index', { locals, data });
  } catch (error) {
    console.log(error);
  }

});

function insertPostData () {
      Post.insertMany([
        {
          title: "Building APIs with Node.js",
          body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
        },])

    }
    insertPostData()
router.get('/about', (req,res)=>{
    res.render('about')
})

module.exports= router