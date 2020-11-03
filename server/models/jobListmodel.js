const mongoose = require('mongoose');


const jobListSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String, 
  phone: String, 
  position: String,
  submitted: String, 
  application: String, 
  interview: String, 
  offer: String,
  user_id: {
    type: String,
    require: true
}
});

module.exports = mongoose.model('jobList', jobListSchema);