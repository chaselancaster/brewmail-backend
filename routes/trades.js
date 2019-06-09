const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/create/:currentUserId/:tradingPartnerId", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const tradeCreator = await User.findById(req.params.currentUserId);
    const tradePartner = await User.findById(req.params.tradingPartnerId);
    console.log(tradeCreator, "<-- tradeCreator in create trade function");
    console.log(tradePartner, "<-- tradePartner in create trade function");
    // currentUser.trades.push(req.body);
    // currentUser.save();
    // res.json({
    //   currentUser: currentUser,
    //   success: true,
    //   message: "Trade has been created"
    // });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
