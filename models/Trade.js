const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  creatorBeer: [],
  partnerBeer: [],
  user1Address: { type: String },
  user2Address: { type: String },
  isComplete: { type: Boolean },
  createdBy: {},
  tradingPartner: {}
});

module.exports = mongoose.model("Trade", TradeSchema);
