import React from 'react';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// import HeaderDriver from './components/Driver/HeaderDriver';
// import HeaderShipper from './components/Shipper/HeaderShipper';
// import Footer from './components/Footer/Footer';
// import NotFound from './components/App/NotFound';
// import Welcome from './components/Welcome/Welcome';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// // import Logout from './components/Logout/Logout';

// import Driver from './components/Driver/Driver';
// import Trucks from './components/Driver/Trucks';
// import ProfileDriver from './components/Driver/ProfileDriver';

// import Shipper from './components/Shipper/Shipper';
// import ProfileShipper from './components/Shipper/ProfileShipper';
import './scss/styles.scss';

import { BrowserRouter } from "react-router-dom";
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import DriverHeader from './components/Driver/Header';
import ShipperHeader from './components/Shipper/Header';
// import HeaderShipper from './components/Shipper/HeaderShipper';

function App() {
  // const isAuthenticatedDriver = true;
  // const isAuthenticatedShipper = false;

  const {token, login, logout, userId, userType} = useAuth();
  // console.log("token: " + token);
  // console.log("userId: " + userId);
  // console.log("userType: " + userType);

  const isAuthenticated = !!token;
  //const isAuthenticated = false;
  const routes = useRoutes(isAuthenticated, userType);

  // console.log("isAuthenticated: " + isAuthenticated);

  return (
    <AuthContext.Provider value={{token, login, logout, userId, userType, isAuthenticated}}>
      <BrowserRouter>
        { isAuthenticated && ((userType === "driver" && <DriverHeader />) || (userType === "shipper" && <ShipperHeader />)) }
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
