const express = require('express');
const router  = express.Router();
const fileUpload = require('../configs/cloudinary');
const Post = require('../models/post-model');
const axios = require('axios')

/* GET home page */
router.get('/main', (req, res, next) => {
  Post.find()
  .then((response) => {
    res.json(response)
  })
 
});

router.get('/trends', (req, res, next) => {
  let options = {
    method: 'GET',
    headers: {
      "oauth_consumer_key": process.env.TWITTER_KEY,
      "oauth_nonce": process.env.TWITTER_SECRET_KEY,
      "oauth_signature":  process.env.ACCESS_TOKEN,
      "oauth_token": process.env.ACCESS_SECRET,
    }
  }
  axios.get('https://api.twitter.com/1.1/trends/place.json?id=23424925', options)
  .then((response) => {
    console.log(response)
    res.json(response)
  }).catch((error) => {
    console.log(error)
  })
})



module.exports = router;