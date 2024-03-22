const express = require('express');
const router = express.Router(); // Create a router instance
const Food = require('../models/Food.js');

// Middleware to parse JSON bodies
router.use(express.json());

// Retrieve all food items
router.get('/api/food', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve a specific food item by ID
router.get('/api/food/:name', async (req, res) => {
  const name=req.params.food_item_name;
  try {
    const food = await Food.findOne({ name });
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new food item
router.post('/api/newfood', async (req, res) => {
  const food = req.body;
  try {
    const newFood = await Food.create(food);
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a food item
router.patch('/api/updatefood/:name', async (req, res) => {
  const name=req.params.food_item_name;
  try {
    const food = await Food.findOne({ name });
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    Object.assign(food, req.body);
    const updatedFood = await Food.create(food);
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a food item
router.delete('/api/deletefood/:name', async (req, res) => {
  const name=req.params.food_item_name;
  try {
    const food = await Food.findOneAndDelete({ name });
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json({ message: 'Food item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; // Export the router
