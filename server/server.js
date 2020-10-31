const express = require('express');
const dotenv = require('dotenv') // .config(); // has our config/variables
const path = require('path');
// const bodyParser = require('body-parser'); replace by the express.json()
const cors = require('cors');
const mongoose = require('mongoose');

// requiring routers 
const userRouter = require('./routers/userRouter');
const tasksRouter = require('./routers/tasksRouter');
const jobListRouter = require('./routers/jobListRouter');

const app = express();
app.use(express.json());
app.use(cors()); 
app.use(express.static('build'));

// to load config file
dotenv.config({ path: './config/config.env' }); // where we place our global variables, port also goes here. can also store Mongo_URI

const PORT = process.env.PORT || 5000;

// set up routers for all the databases we have

app.use('/users', userRouter);
app.use('/tasks', tasksRouter);
app.use('/jobs', jobListRouter);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // options for the connect method to parse the URI
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log(`MongoDB connected at: ${conn.connection.host}`)
  } catch (err) {
    console.log(err);
  }
}

// connect to mongo Database
connectDB(); 


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err};
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});









// whenever we use process.env we can use variables in that config. if not there then we use port 5000

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
