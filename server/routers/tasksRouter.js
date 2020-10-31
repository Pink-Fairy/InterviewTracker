// create User object that will have user schema
const express = require('express'); // creates router variable that has router capabilities

const tasksController = require("../controllers/tasksController");

const router = express.Router();


// this router is activated on: /tasks

// GET - get all tasks
router.get('/', (req, res) => res.status(200).json())

// POST - create a task
router.post('/', (req, res) => res.status(200).json())


// PUT - update a task
router.put('/:id', (req, res) => res.status(200).json())

// DELETE - delete a task
router.delete('/:id', (req, res) => res.status(200).json())



module.exports = router; 


