import React, { useEffect } from 'react';
import { BrowserRouter as Switch, Route, useHistory} from "react-router-dom";
import  jwt_decode from 'jwt-decode'; 
import { connect } from 'react-redux';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import StudentDetailPage from './StudentDetailPage';
import InterviewDetailPage from './InterviewDetailPage';

 const App = (props) => {

  //same problem only url changes and not the page!
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      const user = jwt_decode(token);
      console.log("user", user);
      history.push({pathname:'/dashboard', state:{user,} });
    }
  },[]);
  return (
    <div>
        <Switch>
          <Route exact path="/" render={ () => <HomePage /> }/>
          <Route exact path="/login" render={ () => <LoginPage /> }/> 
          <Route exact path="/dashboard" render={ (props) => <Dashboard {...props}/> }/>
          <Route exact path="/dashboard/student" render={ (props) => <StudentDetailPage {...props} /> }/>
          <Route exact path="/dashboard/interview" render={ (props) => <InterviewDetailPage {...props} /> }/>
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

