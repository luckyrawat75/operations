const express = require("express");
const router = express.Router();

const MenuItem = require("../models/Menu");
const db = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, price, taste, is_drink, ingredients, num_sales, profession } =
      req.body;

    if (!name || !price || !taste || is_drink == undefined || !profession) {
      return res.status(400).json({
        error: "please provide all required details",
      });
    }

    const newitem = new MenuItem({
      name,
      price,
      taste,
      is_drink,
      ingredients,
      num_sales,
      profession,
    });

    const result = await newitem.save();

    res.status(201).json({
      message: "menu item created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
});

//find menu item by id
// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const item = await MenuItem.findById(id);
//     res.status(200).json({
//       message: "Menu item get successfully",
//       data: item,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "internal server error",
//     });
//   }
// });

//find all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json({
      message: "Menu items get successfully",
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.get("/profession/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "Manager" || worktype == "waiter") {
      const user = await MenuItem.find({ profession: worktype });
      res.status(200).json({
        message: "user get successfully",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "user not found",
    });
  }
});
//get the taste of the dish
router.get("/flavor/:taste", async (req, res) => {
  try {
    const taste = req.params.taste.toLowerCase();
    if (taste == "sweet" || taste == "sour" || taste == "salty") {
      const item = await MenuItem.find({ taste: taste });
      res.status(200).json({
        message: "item get succesfully",
        data: item,
      });
    } else {
      return res.status(400).json({
        error: "Invalid taste type",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "dish not found",
    });
  }
});
//patch
router.patch("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;
    const response = await MenuItem.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json({
      message: "person updated successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      error: "person not found",
    });
  }
});

//delte user using the id
router.delete("/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const result = await MenuItem.findByIdAndDelete(userid);
    res.status(200).json({
      message: "user deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: "user not found",
    });
  }
});

module.exports = router;
