const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  user1Beer: [],
  user2Beer: [],
  user1Address: { type: String },
  user2Address: { type: String },
  isComplete: { type: Boolean },
  createdBy: {},
  tradingPartner: {},
  user1Confirmation: { type: Boolean },
  user2Confirmation: { type: Boolean }
});

module.exports = mongoose.model("Trade", TradeSchema);
