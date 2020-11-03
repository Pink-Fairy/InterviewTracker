import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//for UI design: https://material-ui.com/getting-started/usage/

const TasksList = ({tasks, deleteTask, updateTask }) => {
  const [taskId, setTaskId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: '', // text describing the task
    date: '', // text describing the task
  });
  const updateTaskState = (e) => {
    const { name, value } = e.target
    setUpdatedTask({
      ...updatedTask,
      [name]: value
    });
  };
  const updateAndReset = (input, e) => {
    e.preventDefault();
    updateTask(input, taskId);
    setIsEditing(false);
    setUpdatedTask({
      title: '',
      date: ''
    });
    setTaskId('');
  };
  const style = {
    visibility: isEditing ? "visible" : "hidden",
    opacity: isEditing ? 1 : 0
}
  return(
<List>
    {tasks.map((task) => (
      <ListItem key={task._id} dense button>
        <div className='task-title'>
          <ListItemText primary={task.title} />
        </div>
        
        <div className='task-date'>
          <ListItemText  primary={new Date(task.date).toLocaleDateString()} />
        </div>
      
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="Update"
          onClick={() => {
            {console.log(task._id)}
            setTaskId(task._id);
            setIsEditing(true);
            // updateTask(task);
          }}
        > 
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    ))}
<div style={style}>

<form onSubmit={e => updateAndReset(updatedTask, e)} className="task-form"> 
<TextField 
variant="outlined"
margin="normal"
name='title'
value={updatedTask.title}
placeholder='Task'
required
onChange={updateTaskState}
/>
<TextField 
variant="outlined"
margin="normal"
name='date'
value={updatedTask.date}
placeholder='Date'
onChange={updateTaskState}
/>
<button type='submit' />
</form>
</div> 
  </List>
  )
}
export default TasksList;