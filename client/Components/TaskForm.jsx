import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';


// this component will keep track of our task state through a form

const TaskForm = ({ addTask }) => {
  // define state to keep track of input from user

  const [task, setTask] = useState({
    task: '', // text describing the task
    date: '', // text describing the task
    id: ''
  }); 



 // function that will handle task input change
 const handleTaskInputChange = (e) => {
   const { name, value } = e.target
   setTask({
     ...task,
     [name]: value // using computed property names to update respective fields when user types in that input text
   });
 };

 // func that will handle submit from user
 
 const handleSubmit = (e) => {
   e.preventDefault(); // prevent deault browser form functionality
   // gets called if task is not empty by calling trim function that will remove white spaces
   if (task.task.trim()) {
     addTask({
       ...task
       // need to add id part here for retrieving that specific id from database 
       // id: mongoDB id
     });

     setTask({
       ...task, 
       task: '',
       date: ''
     });

   } 
 }







  return (
    <form onSubmit={handleSubmit}>
      <TextField 
      variant="outlined"
      margin="normal"
      name='task'
      value={task.task}
      placeholder='Task'
      required
      onChange={handleTaskInputChange}
      />
     
     <TextField 
      variant="outlined"
      margin="normal"
      name='date'
      value={task.date}
      placeholder='Date'
      onChange={handleTaskInputChange}
     />
      <button type='submit' />
    </form>
  );
}

export default TaskForm;
