const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');

const jwt = require("jsonwebtoken");

router.get('/',async function(req,res){
  //console.log("User id: " + req.userId);
  var posts = await Post.find();
  console.log(posts);
  res.render('index',{posts, title: 'home'});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost',{ title: 'newPost', author:req.userId});
});




router.post('/newPost', async (req,res) =>{
 
  console.log(req.body);
  var post = new Post(req.body);
  await post.save();
  res.redirect("/");

});


router.get('/edit/:id', async (req,res) =>{
 
var {id} = req.params;
var post = await Post.findById(id);
res.render('edit',{post, title: 'edit'})
 
 });


 router.post('/edit/:id', async (req,res) =>{
 
  var {id} = req.params;
  await Post.update({_id:id}, req.body);
  res.redirect("/");

});

router.get('/delete/:id', async (req,res) =>{
 
  var {id} = req.params;
  var post = await Post.findById(id);
  res.render('delete',{post,title: 'delete'})
   
});

router.post('/delete/:id', async (req,res) =>{
 
  var {id} = req.params;
  await Post.deleteOne({_id:id})
  res.redirect("/");

});


module.exports = router;