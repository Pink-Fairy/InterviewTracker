import React from 'react';
import Task from './Task.jsx';


// renders a list of all tasks

const TasksList = ({ tasks }) => {

  // console.log('taskslist')
  // console.log(tasks)

  
  return (
    <div>
      <ul>
        {
        tasks.map((task, i) => {
          return (
          <Task 
          key={i}
          task={task}
          />
        )})
        }
      </ul>
    </div>
  );
}

export default TasksList;
