const JobList = require('../models/jobListmodel');

const jobListController = {
  getAlljobs: async (req, res) => {
    try {
      const jobs = await JobList.find({ user_id: req.user.id})
      res.json(jobs)
    } catch(err) {
      return res.status(500).json({ msg: "problem with getJobs" })
    }
  }, 

  createOneJob: async (req, res) => {
    try {
    const {name, 
      company, 
      email, 
      phone, 
      position,
      submitted, 
      application, 
      interview,
      offer } = req.body; 
      const newJob = new JobList({
        name, 
      company, 
      email, 
      phone, 
      position,
      submitted, 
      application, 
      interview,
      offer, 
      user_id: req.user.id
      })
      await newJob.save()
      res.json({ msg: 'new job created'})
    }
    catch (err) {
      return res.status(500).json({ msg: "problem with CreateOneJob" })
    }
  },
  
  deleteJob: async (req, res) =>{
    try {
      await JobList.findByIdAndDelete(req.params.id)
      res.json({msg: 'deleted job successfully'})
    } catch (err) {
      return res.status(500).json({ msg: "problem with deleteJob" })
    }
  },

    updateJob: async (req, res ) => {
      try {
       const {name, 
         company, 
         email, 
         phone, 
         position,
         submitted, 
         application, 
         interview,
         offer } = req.body; 
         await JobList.findByIdAndUpdate({_id: req.params.id}, {name, 
          company, 
          email, 
          phone, 
          position,
          submitted, 
          application, 
          interview,
          offer })
          res.json({msg: 'update job'})
      } catch (err) {
       return res.status(500).json({ msg: "problem with updateJob" })
      }
    }
};


module.exports = jobListController;