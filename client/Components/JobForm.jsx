import React, {useState} from 'react'; 
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5),
      width: '25ch',
    },
  },

}));


const JobForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [application, setApplication] = useState('');
  const [interview, setInterview] = useState('');
  const [offer, setOffer] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('tokenStore');
    setToken(token);
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/jobs', {
      method: 'POST', 
      headers: {
        "Content-Type": "Application/JSON",
        "Authorization": token
      },
      body: JSON.stringify({  
        name, 
        company, 
        email, 
        phone, 
        position,
        submitted, 
        application, 
        interview,
        offer
      })
    })
    .then(res => res.json())
    .then(res => console.log(res, 'this is a success'))
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
      <div>
        <TextField
          id="outlined-uncontrolled"
          label="Name"
          size="small"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Company"
          size="small"
          value={company}
          onChange={e => setCompany(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Email"
          size="small"
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Phone"
          size="small"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Position"
          size="small"
          value={position}
          onChange={e => setPosition(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Submitted"
          size="small"
          value={submitted}
          onChange={e => setSubmitted(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Application"
          size="small"
          value={application}
          onChange={e => setApplication(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Interview"
          size="small"
          value={interview}
          onChange={e => setInterview(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Offer"
          size="small"
          value={offer}
          onChange={e => setOffer(e.target.value)}
          variant="outlined"
        />
      </div>
      <Button 
        variant="outlined" 
        size="small" 
        color="primary" 
        className={classes.margin}
        type="submit"
        >
          Small
        </Button>
        </FormControl>
    </form>
  )
}

export default JobForm
