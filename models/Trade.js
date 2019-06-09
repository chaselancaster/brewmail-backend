const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  creatorBeer: [],
  partnerBeer: [],
  creatorAddress: { type: String },
  partnerAddress: { type: String },
  isComplete: { type: Boolean },
  createdBy: {},
  tradingPartner: {},
  id: { type: String }
});

module.exports = mongoose.model("Trade", TradeSchema);
