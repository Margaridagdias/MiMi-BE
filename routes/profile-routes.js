const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const fileUpload = require("../configs/cloudinary");
const Post = require("../models/post-model");

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

router.put("/edit-profile", (req, res) => {
  let user = req.app.locals.loggedUser;
  let { username, email, name, bio, imageUrl, bgImage, font } = req.body;
  User.findOneAndUpdate(
    { email: email },
    {
      username,
      email,
      name,
      bio,
      imageUrl,
      bgImage,
      font,
    }
  ).then(() => {
    res.json({ message: "profile updated successfully" });
  });
});

router.get("/my-profile", (req, res) => {
  const loggedUser = req.user._id;

  User.findById(loggedUser)
    .then((thisUser) => {
      console.log(thisUser);
      //  res.json(thisUser);
      return Post.find({ user: loggedUser }).then((post) => {
        res.json({ thisUser, post });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
