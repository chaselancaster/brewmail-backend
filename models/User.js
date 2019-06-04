const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  cellarBeer: [],
  isoBeer: [],
  ftBeer: [],
  trades: []
});

UserSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, brypt.genSaltSync(10));
};

UserSchema.methods.hashCompare = function(password) {
  return bcrypt.compareSync(password, this.password);
};
