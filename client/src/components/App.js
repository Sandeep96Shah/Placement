import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import StudentDetailPage from './StudentDetailPage';
import InterviewDetailPage from './InterviewDetailPage';
import AddInterview from './AddInterview';
import AddStudent from './AddStudent';

 const App = (props) => {

  //same problem only url changes and not the page!
 
  return (
    <div>
        <Switch>
          <Route exact path="/" render={ () => <HomePage /> }/>
          <Route exact path="/login" render={ () => <LoginPage /> }/> 
          <Route exact path="/dashboard" render={ (props) => <Dashboard {...props}/> }/>
          <Route exact path="/dashboard/student" render={ (props) => <StudentDetailPage {...props} /> }/>
          <Route exact path="/dashboard/interview" render={ (props) => <InterviewDetailPage {...props} /> }/>
          <Route exact path="/dashboard/addInterview" render={ (props) => <AddInterview {...props} /> }/>
          <Route exact path="/dashboard/addStudent" render={ (props) => <AddStudent {...props} /> }/>
          {/* add the 404 error page */}
        </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    students:state.student,
    interview:state.interview,
  };
}
export default connect(mapStateToProps)(App);

