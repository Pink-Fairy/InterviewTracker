import React, { useState } from 'react';


// this component will keep track of our task state through a form

const TaskForm = ({ addTask }) => {
  // define state to keep track of input from user

  const [task, setTask] = useState({
    task: '', // text describing the task
    date: '',
    completed: false // used to keep track of whether task has been completed
  }); 

 // function that will handle task input change
 const handleTaskInputChange = (e) => {
   const { name, value } = e.target
   setTask({
     ...task,
     [name]: value// will contain input from user 
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
      <input 
      name='task'
      value={task.task}
      placeholder='Task'
      required
      onChange={handleTaskInputChange}
      />
      <input 
      name='date'
      value={task.date}
      placeholder='Date'
      onChange={handleTaskInputChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TaskForm;
