import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import axios from 'axios';



// this component will keep track of our task state through a form

const TaskForm = ({getTask}) => {
  // define state to keep track of input from user

  const [task, setTask] = useState({
    title: '', // text describing the task
    date: '', // text describing the task
  }); 

  const history = useHistory();



 // function that will handle task input change
 const handleTaskInputChange = (e) => {
   const { name, value } = e.target
   setTask({
     ...task,
     [name]: value // using computed property names to update respective fields when user types in that input text
   });
 };

 // func that will handle submit from user
 
 const taskForm = (e) => {
   e.preventDefault();
      const token = localStorage.getItem('tokenStore');
      setTask({
        ...task
      });
      // console.log(task); //{task: "buy milk", date: "October 31,2020"}

      const { title, date } = task;
      const newTask = { title, date };

      axios.post('/api/tasks', newTask, {
        headers: {Authorization: token}
      })
      .then(res => {
        console.log(res);
        // addTask({
        //   ...task
        // });
        getTask(token);

      })
      .catch(err => {
        console.log(err);
      });


        setTask({
          title: '',
          date: '',
        });

 };



//  const handleSubmit = (e) => {
//    e.preventDefault(); // prevent deault browser form functionality
//    // gets called if task is not empty by calling trim function that will remove white spaces
//    if (task.task.trim()) {
//      addTask({
//        ...task
//        // need to add id part here for retrieving that specific id from database 
//        // id: mongoDB id
//      });

//      setTask({
//        ...task, 
//        task: '',
//        date: ''
//      });

//    } 
//  }







  return (
    <form onSubmit={taskForm}>
      <TextField 
      variant="outlined"
      margin="normal"
      name='title'
      value={task.title}
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
