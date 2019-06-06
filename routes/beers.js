const express = require("express");
const router = express.Router();

const Beer = require("../models/Beer");
const User = require("../models/User");

// Add beer to User cellar
router.post("/add", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.cellarBeer.push(req.body);
    currentUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to cellar"
    });
  } catch (err) {
    console.log(err);
  }
});

// Add beer to user FT
router.post("/add/fortrade", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.cellarBeer.push(req.body);
    currentUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to for trade"
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
