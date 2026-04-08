const mongoose = require("mongoose");

//schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "salty"],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
  profession: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    default: "waiter"
  }
});
//model cration
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
