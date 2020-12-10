const express = require('express');
const router  = express.Router();
const fileUpload = require('../configs/cloudinary');
const Post = require('../models/post-model');
const axios = require('axios')
const path = require('path')

let config = {
  method: 'get',
  url: 'https://api.twitter.com/1.1/trends/place.json?id=23424925',
  headers: { 
    'Authorization': 'OAuth oauth_consumer_key="hJfLjnVfEVDo1XbWx62HrSjDT",oauth_token="186525972-aSvHvxHXxSNgXcP03NZHxzYwXxqdzRj68mjvZxaj",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1607600065",oauth_nonce="zm9nkPi57mL",oauth_version="1.0",oauth_signature="m5wFy5mc0ysZhyX4lEsb26qyipk%3D"', 
    'Cookie': 'personalization_id="v1_hBeKSi6kOsEh4Jt4wK8Cng=="; guest_id=v1%3A160708231310251882; lang=pt'
  }
};


/* GET home page */
router.get('/main', (req, res, next) => {
  Post.find()
  .then((response) => {
    res.json(response)
  })
 
});

router.get('/trends', (req, res, next) => {
  axios(config)
  .then(function (response) {
    console.log(response.data)
   res.json(response.data[0].trends);
  })
  .catch(function (error) {
    res.json(error)
  });
})

router.all("*", (req,res,next) =>{
  if (req.originalUrl.startsWith('/api')) {
      // skip any /api routes
      next();
  } else {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  }
})

module.exports = router;