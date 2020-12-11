const express = require('express');
const router  = express.Router();
const fileUpload = require('../configs/cloudinary');
const Post = require('../models/post-model');
const axios = require('axios')
const path = require('path')
/*
let config = {
  method: 'get',
  url: 'https://api.twitter.com/1.1/trends/place.json?id=23424925',
  headers: { 
    'Authorization': 'OAuth oauth_consumer_key="V4ye2SZS1WQb6ZUy8MyxS0L8q",oauth_token="186525972-XRWHyisNLsWq4kb81wrFdK547KE7HsUjpkAjrvKf",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1607691255",oauth_nonce="xdFkx74PGGu",oauth_version="1.0",oauth_signature="ua8VK7cZprp1XxGcUYLJ3%2BjAms4%3D"'
  }
};
*/

/* GET home page */
router.get('/main', (req, res, next) => {
  Post.find()
  .then((response) => {
    res.json(response)
  })
 
});

// router.get('/trends', (req, res, next) => {
//   console.log('route was called')
//   axios({
//     method: 'get',
//     url: 'https://api.twitter.com/1.1/trends/place.json?id=23424925',
//     headers: { 
//       'Authorization': 'OAuth oauth_consumer_key="V4ye2SZS1WQb6ZUy8MyxS0L8q",oauth_token="186525972-XRWHyisNLsWq4kb81wrFdK547KE7HsUjpkAjrvKf",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1607691255",oauth_nonce="xdFkx74PGGu",oauth_version="1.0",oauth_signature="ua8VK7cZprp1XxGcUYLJ3%2BjAms4%3D"'
//     }
//   })
//   .then( (response) => {
//     console.log(response.data)
//    res.json(response.data[0].trends);
//   })
//   .catch( (error) => {
//     res.json(error)
//   });
// })

router.all("*", (req,res,next) =>{
  if (req.originalUrl.startsWith('/api')) {
      // skip any /api routes
      next();
  } else {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  }
})

module.exports = router;