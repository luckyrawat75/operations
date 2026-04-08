const mongoose = require("mongoose");

// Connect DB
mongoose
  .connect(
    "mongodb+srv://luckyrawat_2003:rishikarwt2007@cluster0.macxfs9.mongodb.net/myDatabase?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database", err.message);
  });

