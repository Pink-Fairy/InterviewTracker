import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const TasksList = ({tasks, deleteTask }) => {
  return(
<List>
    {tasks.map((task, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={task.task} />
        <ListItemText primary={task.date} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTask(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton> 
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  )
}

export default TasksList;
