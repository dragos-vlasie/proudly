const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  userId: {
    type: Number,
    default: 0
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
