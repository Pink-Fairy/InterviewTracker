const express = require('express');
// global variables, PORT and  Mongo_URI stored in config.env file
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

/*----requiring routers----*/
const userRouter = require('./routers/userRouter');
const tasksRouter = require('./routers/tasksRouter');
const jobListRouter = require('./routers/jobListRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));

//load config file
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

// set up routers for all the databases we have
app.use('/users', userRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/jobs', jobListRouter);

//connect to MongoDB
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// options for the connect method to parse the URI
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`MongoDB connected at: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
	}
};

// connecting to MongoDB Database
connectDB();

//respond with main app
app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = { ...defaultErr, ...err };
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, (err) => {
	if (err) return console.log(err);
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
