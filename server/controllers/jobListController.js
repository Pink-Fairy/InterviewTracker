const JobList = require('../models/jobListmodel');

const jobListController = {};


// get all jobs

jobListController.getAllJobs = (req, res, next) => {
  // get id from user
  const { id } = req.params; 

  JobList.find({user_id: id }).exec()
  .then((jobs) => {
    res.locals.jobs = jobs; 
    return next();
  })
  .catch(err => {
    return res.status(500).json({
    message: err.message
      })
    }
  );
}

// post a new job
// jobListController.postJobs = (req, res, next) => {
//     const {name, company, email, phone, position, submitted, 
//     application, interview, offer, user_id: user.params.id
//     } = req.body
// }






module.exports = jobListController;