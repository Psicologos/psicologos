const path = require('path');
const mongoose = require('mongoose');
const dbURL = process.env.DBURL

mongoose.connect(dbURL)
  .then(() => console.log(`Connected to ${dbURL}`))
  .catch(e => {
    console.log(`Error connecting to ${dbURL} database`);
    throw e;
  });
