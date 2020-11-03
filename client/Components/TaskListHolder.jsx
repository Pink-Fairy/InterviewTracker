import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TasksList from './TasksList.jsx';
import TaskForm from './TaskForm.jsx';

/*useEffect - allows us to provide functionality that responds to certain data or functions in our code
  takes in two parameters 
  1. function aka the effect
  2. the dependency array - param that determines if the effect gets fired or not. if one or more
      variables in the array changes, then the effect changes, if it empty, the effect will be fired with the component is initially rendered */ 

  const TaskListHolder = () => {
  // set an initial state: either get all tasks from mongo or set it to an empty array
  // const initialState = localStorage.getItem('tasks') || [];
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState('');
  
  const getTask = async(token) => {
    const response = await axios.get('/api/tasks', {
      headers: {Authorization: token}
    })
    setTasks(response.data);
  };
    useEffect(() => {
      const token = localStorage.getItem('tokenStore');
      setToken(token);
      if (token) {
        getTask(token)
      }
    }, [tasks]);

    
    const deleteTask = (taskMongoID) => {
      const token = localStorage.getItem('tokenStore');
      setToken(token);
      axios.delete(`/api/tasks/${taskMongoID}`, {
        headers: {Authorization: token}
      })
      .then(res => {
        const newTasks = tasks.filter((task) => task._id !== taskMongoID);
        setTasks(
          newTasks
        );
      })
      .catch(err => console.log(err));
    };

    const updateTask = (task, id) => {
      const token = localStorage.getItem('tokenStore');
      setToken(token);
      axios.put(`/api/tasks/${id}`, task, {
        headers: {Authorization: token}
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    }

  return (
    <div className="tasks_container">
      <TaskForm getTask={getTask}/>
      <TasksList 
      tasks={tasks} 
      deleteTask={deleteTask}
      updateTask={updateTask}
      />
    </div>
  )
}
export default TaskListHolder;