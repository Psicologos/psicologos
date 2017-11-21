const path = require('path');
const mongoose = require('mongoose');
const dbName = 'psicologos';
const dbURL = `mongodb://localhost/${dbName}`;

mongoose.connect(dbURL)
  .then(() => console.log(`Connected to ${dbURL}`))
  .catch(e => {
    console.log(`Error connecting to ${dbURL} database`);
    throw e;
  });
