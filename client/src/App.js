import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/App/NotFound';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import Logout from './components/Logout/Logout';
import Trucks from './components/Trucks/Trucks';
import Driver from './components/Driver/Driver';
import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/logout" component={Logout}/> */}
          <Route exact path="/trucks" component={Trucks} />
          <Route exact path="/driver" component={Driver} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
