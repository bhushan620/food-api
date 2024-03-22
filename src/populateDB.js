const mongoose = require('mongoose'); 
const Food = require('./models/Food');
const foodData = require('./foodData.json'); 
require('./db/connection.js');

async function populateDB() {
  try {
    await Food.deleteMany(); // Clear existing data from the database
    console.log('Database cleared');
    
    // Insert each food item into the database
    await Promise.all(foodData.food_items.map(async (item) => {
      const food = new Food(item);
      await food.save();
      console.log(`Inserted ${food.food_item_name} into the database`);
    }));

    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    mongoose.disconnect(); // Disconnect from the database after populating
  }
}

populateDB();
