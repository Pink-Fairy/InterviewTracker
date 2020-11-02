import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{ useHistory } from 'react-router-dom';

import TasksList from './TasksList.jsx';
import TaskForm from './TaskForm.jsx';


// useEffect - allows us to provide functionality that responds to certain data or functions in our code
  // takes in two parameters 
  // 1. function aka the effect
  // 2. the dependency array - param that determines if the effect gets fired or not. if one or more
      // variables in the array changes, then the effect changes, if it empty, the effect will be fired with the component is initially rendered  

const TaskListHolder = () => {
  const [tasks, setTasks] = useState([]);


  const history = useHistory(); 

  

  useEffect(() => {
    const getTasks = async () => {
      const token = localStorage.getItem('tokenStore')
      if(match.params.id) {

      }
    }
    getTasks();
  }, [])

  // take in a task and add it to task array
  const addTask = (task) => {

    setTasks([task, ...tasks]);
  };




  return (
    <div className="tasksList_Container">
      <div className="taskList_Header">
        Task
      </div>
      <div className="taskListHolder">
        <TasksList tasks={tasks} />
      </div>
      <div className="taskListButton">
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default TaskListHolder;