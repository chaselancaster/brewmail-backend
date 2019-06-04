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
    res.json({ err });
  }
});
