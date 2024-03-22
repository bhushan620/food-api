const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  food_item_name: { type: String, required: true },
  food_group: String,
  description: String,
  nutritional_information: {
    fat: Number,
    fiber: Number,
    protein: Number,
    calories: Number,
    carbohydrates: Number,
  },
  serving_size: String,
  allergens: [String],
  ingredients: [String],
  preparation_methods: [String],
  certifications: [String],
  country_of_origin: String,
  dietary_restrictions: [String],
  brand_or_manufacturer: String,
  health_benefits: [String],
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
