//Importing required libraries
const express = require('express');
const app = require('./app');

//Assigning dummy port
const PORT = 3000;

// Top-level Command for handling requests
app.listen(PORT, ()=> {
  console.log(`app running succesfully on http://localhost:${PORT}`);
})


