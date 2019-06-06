const mongoose = require("mongoose");

const BeerSchema = new mongoose.Schema({
  beerName: { type: String },
  beerABV: { type: String, required: true },
  beerStyle: { type: String, required: true },
  breweryName: { type: String },
  quantity: { type: Number },
  year: { type: String },
  size: { type: String },
  label: { type: String },
  isForTrade: { type: Boolean }
});

module.exports = mongoose.model("Beer", BeerSchema);
