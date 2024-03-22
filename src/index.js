// const express = require('express');
// const mongoose = require('mongoose');
// const foodRoutes = require('./routes/foodRoutes.js');
// require('./db/connection.js');
// const app = express();

// // Routes
// app.use(foodRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes.js');
require('./db/connection.js');
const app = express();
app.use(express.json());

// Routes
app.use('/', foodRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
