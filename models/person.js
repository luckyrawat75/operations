const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const foodSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  age: Number,
  username: { type: String, required: true },
  password: { type: String, required: true },
});

foodSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

foodSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("Food", foodSchema);