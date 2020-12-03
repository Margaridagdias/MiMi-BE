const express = require('express');
const router  = express.Router();
const User = require ('../models/user-model')


router.get('/profile', (req, res, next) => {
  let user = req.app.locals.loggedUser
  if (!user) {
    res.redirect('/login')
  }
  console.log(user._id)
  User.findById(user._id)
  .then((thisUser) => {
    res.render('profile', {thisUser, user: req.app.locals.loggedUser});
  })

});

router.post('/profile', (req, res) => {
  let user = req.app.locals.loggedUser
  let { username, email, password, name} = req.body;
  User.findByIdAndUpdate(user._id, {
    username,
    email,
    password,
    name
  }).then((updatedUser) => {
    res.redirect('/profile');
  });
});






module.exports = router;