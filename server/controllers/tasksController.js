const Task = require('../models/tasksmodel');

const tasksController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ user_id: req.user.id });
      res.json(tasks);
    } catch (err) {
      return res.status(500).json({ msg: "problem with getTasks" })
    }

  },
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
    return res.status(500).json({msg: "problem with createOnetask"})
    } 
  },  
  deleteTask: async (req, res) => {
  try {
    // console.log(req.params.id);
    await Task.findByIdAndDelete(req.params.id);
    res.json({msg: 'deleted task'})
  } catch (err) {
    return res.status(500).json({ msg: "problem with delete one task" })
  }
    },

  updateTask: async (req, res) => {
    // console.log(req.params.id)
    try {
      const { title, date } = req.body;
      await Task.findByIdAndUpdate({ _id: req.params.id }, {title, date});
res.json({msg: 'updated task'})
    } catch (err) {
      return res.status(500).json({ msg: "problem with updateTask" })
    }
  }
}

module.exports = tasksController;