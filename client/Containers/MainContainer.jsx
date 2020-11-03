import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { BrowserRouter as Router,Switch,  Route } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Job from '../Components/Job.jsx';
import JobForm from '../Components/JobForm.jsx';
import Calendar from '../Components/Calendar.jsx';
import Menu from '../Components/Menu.jsx';
import UpdateJob from './UpdateJob.jsx';
import TaskListHolder from '../Components/TaskListHolder.jsx';



export default function MainContainer({setIsLogin}) {
  
    return (
      <Router>
        <Switch>
          <Route exact path="/">
          <div className="grid-container">
          <Header setIsLogin={setIsLogin} />
        <div className="Menu"><Menu/></div>
        <div className="Calendar"><Calendar /></div>
        <div className="Task"><TaskListHolder /></div>
        <div className="Job"><Job /></div> 
        <div className="AddJob"><JobForm /></div>
        </div>
          </Route>
        <Route exact path='/update/:id' component={UpdateJob} />
        </Switch>
      </Router>
    )
  };
