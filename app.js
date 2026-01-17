// Necessary Imports 
const express = require('express');
const connectDB = require('./config/db');
const noteRoutes = require('./Routes/noteRoutes');
const authRoutes = require('./Routes/authRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const errorHandler = require('./middleware/errorHandler');

//Create app
const app = express();

// Connnecting to the DataBase
connectDB();

//Parsing all content as json
app.use(express.json());

//Accessing Routes
app.use('/notes', noteRoutes);
app.use('/auth',authRoutes);
app.use('/admin',adminRoutes);

//Error handling for other routes
app.use((req,res)=> {
  res.status(404).json({error: "Resource Not found"});
})

//Centralized error catching for internal failures
app.use(errorHandler);

module.exports = app;