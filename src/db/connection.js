const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Food-nutrition-api')
  .then(() => console.log('db connected'))
  .catch((err) => console.error('Error connecting to database:', err.message));
