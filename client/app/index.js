import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';
import './scss/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        {/* <Route exact path="/logout" component={Logout}/> */}
        <Route exact path="/home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
