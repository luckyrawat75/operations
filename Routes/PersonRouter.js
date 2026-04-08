const express = require("express");
const router = express.Router();


const Food = require("../models/person"); 

const db = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, email, city } = req.body;

    if (!name || !email || !city) {
      return res.status(400).json({
        error: "please provide all the details",
      });
    }

    const newuser = new Food({
      name,
      email,
      city,
    });

    const result = await newuser.save();

    res.status(201).json({
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await Food.find();
    res.status(200).json({
      message: "user get successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Food.findById(id);
    res.status(200).json({
      message: "user get successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
});


module.exports = router;
