import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import{ useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
// import useTodoState from './useTodoState';

import TasksList from './TasksList.jsx';
import TaskForm from './TaskForm.jsx';


// useEffect - allows us to provide functionality that responds to certain data or functions in our code
  // takes in two parameters 
  // 1. function aka the effect
  // 2. the dependency array - param that determines if the effect gets fired or not. if one or more
      // variables in the array changes, then the effect changes, if it empty, the effect will be fired with the component is initially rendered  

const TaskListHolder = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(
      [task, ...tasks]
    );
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(
      newTasks
    );
  };


  return (
    <div className="tasks_container">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TaskForm 
      addTask={addTask} 
      />
      <TasksList 
      tasks={tasks} 
      deleteTask={deleteTask}
      />
    </div>
  )
}

export default TaskListHolder;