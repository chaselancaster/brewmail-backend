const express = require("express");
const router = express.Router();

const Beer = require("../models/Beer");
const User = require("../models/User");

// Add beer to User cellar
router.post("/add", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.dbId);
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

module.exports = router;
