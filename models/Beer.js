const mongoose = require("mongoose");

const BeerSchema = new mongoose.Schema({
  beerName: { type: String },
  beerABV: { type: String },
  beerStyle: { type: String },
  breweryName: { type: String },
  quantity: { type: Number, required: true },
  year: { type: String },
  size: { type: String },
  label: { type: String },
  isForTrade: { type: Boolean }
});

module.exports = mongoose.model("Beer", BeerSchema);
