const express = require('express');
const router  = express.Router();
const fileUpload = require('../configs/cloudinary');

/* GET home page */
router.get('/main', (req, res, next) => {
  res.render('index');
});



module.exports = router;