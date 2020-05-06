const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AccountSchema = new Schema({
  userData: {
    userName: String,
    userId: String
  },
  tasks: [
    {
      name: String,
      date: { type: Date, default: Date.now },
      subTasks: [
        {
          name: String,
          checked: Boolean,
          date: { type: Date, default: Date.now }
        }
      ]
    }
  ],
  mission: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Account = mongoose.model("account", AccountSchema);
