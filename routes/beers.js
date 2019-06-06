const express = require("express");
const router = express.Router();

const Beer = require("../models/Beer");

// Add beer to User cellar
router.post("/add", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.dbId);
    foundUser.cellarBeer.push(req.body);
    foundUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to cellar"
    });
  } catch (err) {
    console.log(err);
  }
});
