var mongoose = require("mongoose");
// var db = require('../database');
// create an schema
var bondSchema = new mongoose.Schema({
  bondId: String,
  type: String,
  issuer: String,
  maturitydate: Date,
  interestrate: Number,
  facevalue: Number,
  tenure: Number,
});
bond = mongoose.model("Bond", bondSchema);

module.exports = bond;
