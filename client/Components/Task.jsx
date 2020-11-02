import React from 'react';

// will render task from list 
// each individual task will have: 
  // - checkbox
  // - task
  // - delete button

const Task = ({ task }) => {

  // console.log('tasks')
  // console.log(task)

  return (
    <div className="Individual_Task">
      <input type="checkbox" />
      <li className="task_item">{task.task} |||||| {task.date} </li>
      <button>X</button>
    </div>
  );
}

export default Task;
