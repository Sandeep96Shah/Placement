import React from 'react';
import { BrowserRouter as Switch, Route} from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import StudentDetailPage from './StudentDetailPage';
import InterviewDetailPage from './InterviewDetailPage';

 const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" render={ () => <HomePage /> }/>
          <Route exact path="/login" render={ () => <LoginPage /> }/> 
          <Route exact path="/dashboard" render={ () => <Dashboard /> }/>
          <Route exact path="/dashboard/student" render={ () => <StudentDetailPage /> }/>
          <Route exact path="/dashboard/interview" render={ () => <InterviewDetailPage /> }/>
          {/* Add the login page and the dashboard page also add the 404 error page */}
        </Switch>
    </div>
  )
}
export default App;

