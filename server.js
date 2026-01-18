//Importing required libraries
const express = require('express');
const app = require('./app');
require('dotenv').config();

// Top-level Command for handling requests
app.listen(process.env.PORT, ()=> {
  console.log(`app running succesfully on http://localhost:${process.env.PORT}`);
})


