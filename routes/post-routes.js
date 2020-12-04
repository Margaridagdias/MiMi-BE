const express = require('express');
const router  = express.Router();
const Post = require('../models/post-model')

/* GET home page */
router.post('/create-post', (req, res, next) => {
  console.log(req.body)
  let {imageUrl} = req.body.imageUrl.data
  let description = req.body.imageUrl
  
Post.create({imageUrl, description})
.then ((response) => {
  res.json(response)
})
});

module.exports = router;