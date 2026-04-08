const mongoose = require("mongoose");
require('dotenv').config();
// Connect DB
const mongoURL = process.env.DB_URL;
mongoose
  .connect(
    mongoURL,
    
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database", err.message);
  });

