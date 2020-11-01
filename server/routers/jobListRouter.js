const express = require('express');
const auth = require("../controllers/auth");
const jobListController = require("../controllers/jobListController");

const router = express.Router();


// this router is activated on:  /api/jobs

router.route('/')
  .get(auth, jobListController.getAlljobs)
  .post(auth, jobListController.createOneJob)

router.route('/:id')
  .put(auth, jobListController.updateJob)
  .delete(auth, jobListController.deleteJob)



module.exports = router; 