const mongoose = require("mongoose");

// Schema
const foodSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  age: Number,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Model
const Food = mongoose.model("Food", foodSchema);

// ✅ Export (CommonJS)
module.exports = Food;
