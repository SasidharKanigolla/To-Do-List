const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
