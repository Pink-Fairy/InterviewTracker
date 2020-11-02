import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import JobForm from '../Components/JobForm.jsx';

export default class MainContainer extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="Menu">Menu</div>
        <div className="Header">Header</div>
        <div className="Calendar">Calendar</div>
        <div className="Task"> Task</div>
        <div className="Job">Job</div>
        <JobForm className="AddJob"/>
        {/* <div className="AddJob">AddJob</div> */}
      </div>
    );
  }
}
