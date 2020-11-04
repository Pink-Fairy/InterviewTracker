// create User object that will have user schema
const express = require('express'); // creates router variable that has router capabilities
const auth = require('../controllers/auth');
const tasksController = require('../controllers/tasksController');

const router = express.Router();

// this router is activated on: /api/tasks

router
	.route('/')
	.get(auth, tasksController.getTasks)
	.post(auth, tasksController.createOneTask);

router
	.route('/:id')
	.put(auth, tasksController.updateTask)
	.delete(auth, tasksController.deleteTask);

router
	.route('/:date')
	.get(auth, tasksController.getDate);

module.exports = router;
