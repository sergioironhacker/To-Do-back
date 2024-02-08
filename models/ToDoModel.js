const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['not done', 'in progress', 'blocked', 'done'],
    default: 'not done'
  }
}, { timestamps: true });

module.exports = mongoose.model("ToDo", toDoSchema);