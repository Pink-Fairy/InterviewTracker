import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Job from '../Components/Job.jsx';
import JobForm from '../Components/JobForm.jsx';
import UpdateJob from './UpdateJob.jsx';



export default function MainContainer({setIsLogin}) {
  
    return (
      <Router>
        <div className="grid-container">
          <Header setIsLogin={setIsLogin} />
        <div className="Menu">Menu</div>
        <div className="Calendar"></div>
        {/* <          "> T className="Job"ask   */}
        <div className="Job"><Job /></div> 
        <div className="AddJob"><JobForm /></div>

          <section>
        <Route path='/update/:id' component={UpdateJob} exact/>
          </section>
        </div>
      </Router>
    )
  }


  // <Router>
  // <div className='notes-page'>
  //         <Header setIsLogin={setIsLogin} />
  //         <section>
  //             <Route path='/' component={Home} exact/>
  //             <Route path='/create' component={CreateNote} exact />
  //             <Route path='/edit/:id' component={EditNote} exact/>
  //         </section>
  // </div>
  // </Router>
