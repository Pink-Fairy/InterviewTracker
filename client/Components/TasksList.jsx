import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const TasksList = ({tasks, deleteTask, updateTask }) => {
  return(
<List>
    {tasks.map((task) => (
      <ListItem key={task._id} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={task.title} />
        <ListItemText primary={new Date(task.date).toLocaleDateString()} />
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
              updateTask(task);
            }}
          > 
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  )
}

export default TasksList;
