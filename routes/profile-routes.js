const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const fileUpload = require("../configs/cloudinary");



router.post("/upload", fileUpload.single("file"), (req, res) => {
  res.json({ fileUrl: req.file.path });
});

router.get("/profile", (req, res, next) => {
  let user = req.app.locals.loggedUser;
  if (!user) {
    res.redirect("/login");
  }
  console.log(user._id);
  User.findById(user._id).then((thisUser) => {
    res.render("profile", { thisUser, user: req.app.locals.loggedUser });
  });
});

router.post("/profile", (req, res) => {
  let user = req.app.locals.loggedUser;
  let { username, email, password, name } = req.body;
  User.findByIdAndUpdate(user._id, {
    username,
    email,
    password,
    name,
  }).then((updatedUser) => {
    res.redirect("/profile");
  });
});

router.get("/profile/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id)
    .then((thisUser) => {
      console.log(thisUser);
      res.json(thisUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/my-profile", (req, res) => {
  const loggedUser = req.user._id;
  User.findById(loggedUser)
    .then((thisUser) => {
      console.log(thisUser);
      res.json(thisUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
