const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  userData: {
    userName: String,
    userId: String
  },
  name: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("task", TaskSchema);
