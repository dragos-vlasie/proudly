const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AccountSchema = new Schema({
  userData: {
    userName: String,
    userId: String
  },
  tasks: [
    { name: String, points: Number, date: { type: Date, default: Date.now } }
  ],
  mission: String,
  date: {
    type: Date,
    default: Date.now
  },
  test: String
});

module.exports = Account = mongoose.model("account", AccountSchema);
