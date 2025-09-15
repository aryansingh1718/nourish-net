const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");
const { foodSchema } = require("../utils/zod");

const foodUpdateSchema = foodSchema; 
const foodPartialSchema = foodSchema.partial();

function validate(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({ error: err.errors[0].message });
    }
  };
}

// Add new food
router.post("/add", validate(foodSchema), foodController.addFood);

// Get all food listings
router.get("/all", foodController.getAllFood);

// Get one food by ID
router.get("/:id", foodController.getFoodById);

// Full update (all fields required)
router.put("/:id", validate(foodUpdateSchema), foodController.updateFood);

// Partial update (only provided fields required)
router.patch("/:id", validate(foodPartialSchema), foodController.updateFood);

// Delete food
router.delete("/:id", foodController.deleteFood);

module.exports = router;
