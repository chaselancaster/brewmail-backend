const express = require("express");
const router = express.Router();

const uuidv1 = require("uuid/v1");

const User = require("../models/User");

router.post("/create/:currentUserId/:tradingPartnerId", async (req, res) => {
  try {
    const createdId = uuidv1();
    // console.log(createdId, "<-- createdId");
    const tradeCreator = await User.findById(req.params.currentUserId);
    const tradePartner = await User.findById(req.params.tradingPartnerId);
    // console.log(tradeCreator, "<-- tradeCreator in create trade function");
    // console.log(tradePartner, "<-- tradePartner in create trade function");
    const createdTrade = req.body;
    console.log(createdTrade, "<-- createdTrade");
    createdTrade.id = createdId;
    console.log(createdTrade, "<-- createdTrade after adding id");
    // push trade into tradeCreator's and tradePartner's trades array
    tradeCreator.trades.push(createdTrade);
    tradeCreator.save();
    tradePartner.trades.push(createdTrade);
    tradePartner.save();
    // console.log(tradeCreator, "<-- tradeCreator after trade has been added");
    // console.log(tradePartner, "<-- tradePartner after trade has been added");
    res.json({
      currentUser: tradeCreator,
      success: true,
      message: "Trade has been created"
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
