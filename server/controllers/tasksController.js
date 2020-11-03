const Task = require('../models/tasksmodel');

const tasksController = {
	//get all tasks
	getTasks: async (req, res) => {
		try {
			const tasks = await Task.find({ user_id: req.user.id });
			res.json(tasks);
		} catch (err) {
			return res.status(500).json({ msg: 'problem with getTasks' });
		}
	},

	//create a task
	createOneTask: async (req, res) => {
		try {
			const { title, date } = req.body;
			const newTask = new Task({
				title,
				date,
				user_id: req.user.id,
			});
			await newTask.save();
			res.json({ msg: 'created new task' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with createOnetask' });
		}
	},

	//delete a task
	deleteTask: async (req, res) => {
		try {
			await Task.findByIdAndDelete(req.params.id);
			res.json({ msg: 'deleted task' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with delete one task' });
		}
	},

	//update a task
	updateTask: async (req, res) => {
		try {
			const { title, date } = req.body;
			await Task.findByIdAndUpdate({ _id: req.params.id }, { title, date });
			res.json({ msg: 'updated task' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with updateTask' });
		}
	},
};

module.exports = tasksController;
