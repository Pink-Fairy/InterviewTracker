const express = require('express');
const dotenv = require('dotenv'); // has our config/variables
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// to load config file
dotenv.config({ path: './config/config.env' }); // where we place our global variables, port also goes here. can also store Mongo_URI

const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// whenever we use process.env we can use variables in that config. if not there then we use port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
