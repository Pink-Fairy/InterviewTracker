import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';


//styling for the UpdateJob Component
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '100%',
      maxWidth: 500
    },
  },
}));

const UpdateJob = () => {
  const history = useHistory();
  const classes = useStyles();

  const { id } =  useParams();
  const [token, setToken] = useState('');
  const [job, setJob] = useState('')

  
  //function to get one job 
  const getJobs = async (token) => {
    const res = await axios.get(`/api/jobs/${id}`, {
      headers: {Authorization: token}
    })
    setJob(res.data); 
  }

  //using useEffect to fill out the form with the information of the job to be updated
  useEffect(() => {
    const token = localStorage.getItem('tokenStore');
    setToken(token);
    if (token) {
        getJobs(token);
    }
  }, []);

  //Custom hook for handling input boxes
  const onChangeInput = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value })
  };

  
  const jobForm = async e => {
  e.preventDefault()
  try {
    const token = localStorage.getItem('tokenStore')
    if(token){
      const { name, company, email, phone, position, submitted, application, interview, offer } = job;
      
      //creating object to send with put request 
      const newJob = { name, company, email, phone, position, submitted, application, interview, offer};
      
      //put request to update a job
      await axios.put(`/api/jobs/${id}`, newJob, {
          headers: {Authorization: token}
        })
      
      // redirect to the MainContainer     
      return history.push('/')
    }
    } catch (err) {
      window.location.href = "/";
    }
  }
  

  const handleDelete = async e => {
    e.preventDefault()
    try {
      //delete request to delete a job
      const deleted = axios.delete(`/api/jobs/${id}`, {
      headers: {Authorization: token}
      })
      //redirecting to the MainContainer
      return history.push('/')
      } catch (error) {
        window.location.href = "/";
      }
    }


return (
  <form onSubmit={jobForm} className={classes.root} noValidate autoComplete="off">
        <FormControl component="fieldset" >
        <div>
        <Typography variant="h3" gutterBottom>
        Update Job Entry
      </Typography>
          <div>
          <TextField
            id="outlined"
            label="Name"
            type="text"
            name="name"
            defaultValue="{job.name}"
            value={job.name}
            onChange={onChangeInput}
            variant="outlined"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Company"
            type="text"
            name="company"
            defaultValue= "{job.company}"
            value={job.company}
            onChange={onChangeInput}
            variant="outlined"
            />
          </div>
          <div>
          <TextField
          id="outlined-uncontrolled"
          label="Email"
          type="text"
          name="email"
          defaultValue= "{job.email}"
          value={job.email}
          onChange={onChangeInput}
          variant="outlined"
          />
        <TextField
          id="outlined-uncontrolled"
          label="Phone"
          type="text"
          name="phone"
          defaultValue= "{job.phone}"
          value={job.phone}
          onChange={onChangeInput}
          variant="outlined"
          />
          </div>
          <div>
          <TextField
            id="outlined-uncontrolled"
            label="Position"
            type="text"
            name="position"
            defaultValue= "{job.position}"
            value={job.position}
            onChange={onChangeInput}
            variant="outlined"
            />
          <TextField
            id="outlined-uncontrolled"
            label="Submitted"
            type="text"
            name="submitted"
            defaultValue= "{job.submitted}"
            value={job.submitted}
            onChange={onChangeInput}
            variant="outlined"
            />
          </div>
          <div>
          <TextField
            id="outlined-uncontrolled"
            label="Application"
              type="text"
              name="application"
              defaultValue= "{job.application}"
              value={job.application}
              onChange={onChangeInput}
              variant="outlined"
              />
          <TextField
            id="outlined-uncontrolled"
            label="Interview"
            type="text"
              name="interview"
              defaultValue= "{job.interview}"
              value={job.interview}
              onChange={onChangeInput}
              variant="outlined"
              />
          </div>
          <TextField
            id="outlined-uncontrolled"
            label="Offer"
            type="text"
            name="offer"
            defaultValue= "{job.offer}"
            value={job.offer}
            onChange={onChangeInput}
            variant="outlined"
          />
        </div>
        <Button 
          variant="outlined" 
          color="primary" 
          className={classes.margin}
          type="submit">
            SUBMIT
          </Button>
          <Button 
          variant="outlined" 
          color="primary" 
          className={classes.margin}
            type="submit"
            onClick={handleDelete}>
            DELETE
          </Button>
          </FormControl>
      </form>
  )
}

export default UpdateJob


