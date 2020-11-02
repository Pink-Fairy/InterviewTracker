import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import TaskListHolder from '../Components/TaskListHolder.jsx'

export default class MainContainer extends Component {
  render() {
    return (
      <div className="grid-container">
        <TaskListHolder />
      </div>
    );
  }
}
