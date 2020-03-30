import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Logout from './components/Logout/Logout';

import DriverWelcome from './components/Driver/Welcome';
import DriverProfile from './components/Driver/Profile';
import DriverPassword from './components/Driver/Password';
import DriverTrucks from './components/Driver/Trucks/Trucks';
import DriverCreateTruck from './components/Driver/Trucks/CreateTruck';

import Shipper from './components/Shipper/Shipper';
import ShipperProfile from './components/Shipper/Profile';

export const useRoutes = (isAuthenticated, userType) => {
    console.log("userType: " + userType);
    console.log("isAuthenticated: " + isAuthenticated);

    if (isAuthenticated) {
        if (userType === "driver") {
            return (
                <Switch>
                    <Route exact path="/driver" component={DriverWelcome} />
                    <Route exact path="/driver/profile" component={DriverProfile} />
                    <Route exact path="/driver/profile/password" component={DriverPassword} />
                    <Route exact path="/driver/trucks" component={DriverTrucks} />
                    <Route exact path="/driver/truck/create" component={DriverCreateTruck} />
                    <Route exact path="/logout" component={Logout}/>
                    <Redirect to="/driver" />
                </Switch>
            );
        }

        if (userType === "shipper") {
            return (
                <Switch>
                    <Route exact path="/shipper" component={Shipper} />
                    <Route exact path="/shipper/profile" component={ShipperProfile} />
                    <Route exact path="/logout" component={Logout}/>
                    <Redirect to="/shipper" />
                </Switch>
            );
        }
    }
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/" />
        </Switch>
    );
};

export default useRoutes;