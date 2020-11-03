const JobList = require('../models/jobListmodel');

const jobListController = {
	//get the list of jobs by checking user id
	getAlljobs: async (req, res) => {
		try {
			const jobs = await JobList.find({ user_id: req.user.id });
			res.json(jobs);
		} catch (err) {
			return res.status(500).json({ msg: 'problem with getJobs' });
		}
	},

	//create one item with job in db
	createOneJob: async (req, res) => {
		try {
			const {
				name,
				company,
				email,
				phone,
				position,
				submitted,
				application,
				interview,
				offer,
			} = req.body;
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
				user_id: req.user.id,
			});
			await newJob.save();
			res.json({ msg: 'new job created' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with CreateOneJob' });
		}
	},

	//to delete the job - find the id of job item (created by mongodb)
	deleteJob: async (req, res) => {
		try {
			await JobList.findByIdAndDelete(req.params.id);
			res.json({ msg: 'deleted job successfully' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with deleteJob' });
		}
	},

	//to update job item - use put request and id
	updateJob: async (req, res) => {
		try {
			const {
				name,
				company,
				email,
				phone,
				position,
				submitted,
				application,
				interview,
				offer,
			} = req.body;
			await JobList.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					name,
					company,
					email,
					phone,
					position,
					submitted,
					application,
					interview,
					offer,
				}
			);
			res.json({ msg: 'update job' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with updateJob' });
		}
	},

	//to get one job item you can by accessing the job id
	getOneJob: async (req, res) => {
		try {
			const job = await JobList.findById(req.params.id);
			res.json(job);
		} catch (err) {
			return res.status(500).json({ msg: 'problem with getOneJob' });
		}
	},
};

module.exports = jobListController;
