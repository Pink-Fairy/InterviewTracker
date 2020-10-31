const Task = require('../models/tasksmodel');

const tasksController = {
  createOneTask: async (req, res) => {
    try { 
        const { title, date } = req.body;
      const newTask = new Task({
        title,
        date,
        user_id: req.user.id
        })
      await newTask.save()
      // console.log(newTask.id)
        res.json({msg: 'created new task'})
        }
  catch (err) {
    return res.status(500).json({msg: err.message})
    }
    
  },  
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ user_id: req.user.id });
      res.json(tasks);
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }

  },
  deleteTask: async (req, res) => {
  try {
    // console.log(req.params.id);
    await Task.findByIdAndDelete(req.params.id);
    res.json({msg: 'deleted task'})
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
    },

  updateTask: async (req, res) => {
    // console.log(req.params.id)
    try {
      const { title, date } = req.body;
      await Task.findByIdAndUpdate({ _id: req.params.id }, {title, date});
res.json({msg: 'updated task'})
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = tasksController;