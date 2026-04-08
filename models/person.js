const mongoose = require("mongoose");

// Schema
const foodSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

// Model
const Food = mongoose.model("Food", foodSchema);

// ✅ Export (CommonJS)
module.exports = Food;
