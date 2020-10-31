const express = require('express');

const jobListController = require("../controllers/jobListController");

const router = express.Router();


// this router is activated on:  /jobs

// GET - get all jobs for that specific user
router.get('/:id', jobListController.getAllJobs, (req, res) => {
  res.status(200).json(res.locals.jobs);
});

// GET - get one job
router.get('/:id', (req, res) => res.status(200).json())

// POST - Create one job
router.post('/', (req, res) => res.status(200).json())

// PUT - Update one job
router.put('/:id', (req, res) => res.status(200).json())

// DELETE - Delete one job
router.delete('/:id', (req, res) => res.status(200).json())



module.exports = router; 