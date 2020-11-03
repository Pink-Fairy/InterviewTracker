import React, {useState, useEffect} from 'react'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: '20ch',
      
    },
  },

}));


export default function JobForm ()  {
  const classes = useStyles();

  const [job, setJob] = useState({
        name: "", 
        company: "", 
        email: "", 
        phone: "", 
        position: "",
        submitted: "", 
        application: "", 
        interview: "",
        offer: ""
  });
   const history = useHistory();

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

              const newJob = { name, company, email, phone, position, submitted, application, interview, offer};

                await axios.post('/api/jobs', newJob, {
                    headers: {Authorization: token}
                })
                
              setJob({
                  name: "", 
                  company: "", 
                  email: "", 
                  phone: "", 
                  position: "",
                  submitted: "", 
                  application: "", 
                  interview: "",
                  offer: ""
            });

                return history.push('/')
            }
        } catch (err) {
            window.location.href = "/";
        }
   }



   
  return (
    <form onSubmit={jobForm} >
      <FormControl component="fieldset" >
      <div>
        <TextField
          id="outlined-uncontrolled"
          label="Name"
            size="small"
            type="text"
            name="name"
          value={job.name}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Company"
            size="small"
            type="text"
          name="company"
          value={job.company}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
            label="Email"
            type="text"
          size="small"
            name="email"
          value={job.email}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Phone"
            size="small"
            type="text"
          name="phone"
          value={job.phone}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Position"
          size="small"
            name="position"
          value={job.position}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Submitted"
            size="small"
            type="text"
            name="submitted"
          value={job.submitted}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Application"
            size="small"
            type="text"
            name="application"
          value={job.application}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Interview"
            size="small"
            type="text"
            name="interview"
          value={job.interview}
          onChange={onChangeInput}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
            label="Offer"
            type="text"
          size="small"
            name="offer"
          value={job.offer}
          onChange={onChangeInput}
          variant="outlined"
        />
      </div>
      <Button 
        variant="outlined" 
        size="small" 
        color="primary" 
        className={classes.margin}
          type="submit">
          SUBMIT
        </Button>
        </FormControl>
    </form>
  )
}


