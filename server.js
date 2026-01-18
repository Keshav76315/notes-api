//Importing required libraries
require('dotenv').config();
const express = require('express');
const app = require('./app');

//PORT Assignment
const PORT = process.env.PORT || 3030;

// Top-level Command for handling requests
app.listen(PORT, ()=> {
  console.log(`app running successfully on http://localhost:${PORT}`);
})


