const express = require("express");
const router = express.Router();

router.post("/createtrade", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.trades.push(req.body);
    currentUser.save();
    res.json({
      currentUser: currentUser,
      success: true,
      message: "Trade has been created"
    });
  } catch (err) {
    console.log(err);
  }
});
