var mongoose = require("mongoose");
// var db = require('../database');
// create an schema
var bookSchema = new mongoose.Schema({
  id: String,
  bookname: String,
});
userTable = mongoose.model("Book", bookSchema);

module.exports = userTable;
