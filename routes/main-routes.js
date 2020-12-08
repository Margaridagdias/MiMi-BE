const express = require('express');
const router  = express.Router();
const fileUpload = require('../configs/cloudinary');
const Post = require('../models/post-model');
const axios = require('axios')


let config = {
  method: 'get',
  url: 'https://api.twitter.com/1.1/trends/place.json?id=23424925',
  headers: { 
    'Authorization': 'OAuth oauth_consumer_key="uIrQhNtuxupxOoGuqKHmMk0D8",oauth_token="186525972-Ph0D188oQPWDYaWkBKSLBzRusbemL6gRAHjlJaWq",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1607449391",oauth_nonce="Z3NAWayEJct",oauth_version="1.0",oauth_signature="xCnZDJI2w6egMgPwBKamZY9leS0%3D"', 
    'Cookie': 'personalization_id="v1_Rnf6h11vXJrQtXscfGND0g=="; guest_id=v1%3A160744595300415072; lang=pt'
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



module.exports = router;