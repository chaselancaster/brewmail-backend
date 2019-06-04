const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  console.log("register post route hit");
  try {
    const createdUser = await User.create(req.body);
    if (createdUser) {
      req.session.dbId = createdUser._id;
      res.json({
        user: createdUser,
        success: true
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log("login post route hit");
  try {
    const foundUser = await User.findOne({
      username: req.body.username
    });
    if (foundUser) {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.dbId = foundUser._id;
        req.session.logged = true;
        res.json({
          user: foundUser,
          success: true
        });
      } else {
        res.json({
          message: "Invalid username or password"
        });
      }
    }
  } catch (err) {
    res.json({ err });
  }
});

// Finding logged in user info
router.get("/profile", async (req, res) => {
  try {
    const user = await User.findById(req.session.dbId);
    console.log(user, "<-- user in get route");
    res.json({ user });
  } catch (err) {
    console.log(err);
  }
});

// Getting all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json({ allUsers });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
