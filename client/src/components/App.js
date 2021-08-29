import React from 'react';
import { BrowserRouter as Switch, Route} from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';

 const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" render={ () => <HomePage /> }/>
          <Route exact path="/login" render={ () => <LoginPage /> }/> 
          {/* Add the login page and the dashboard page also add the 404 error page */}
        </Switch>
    </div>
  )
}
export default App;

