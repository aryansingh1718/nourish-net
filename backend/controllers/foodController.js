const Food = require("../model/Food");

// Add new food
exports.addFood = async (req, res) => {
  try {

    const newFood = new Food(req.body);
    await newFood.save();

    res.status(201).json({ message: "Food added successfully", food: newFood });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all food listings
exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get one food by ID
exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ error: "Food not found" });

    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update food (PUT/PATCH)
exports.updateFood = async (req, res) => {
  try {

    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!food) return res.status(404).json({ error: "Food not found" });

    res.status(200).json({ message: " Food updated successfully", food });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete food
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) return res.status(404).json({ error: "Food not found" });

    res.status(200).json({ message: " Food deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
