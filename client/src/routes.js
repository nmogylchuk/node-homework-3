import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Logout from './components/Logout/Logout';

import Driver from './components/Driver/Driver';
import DriverProfile from './components/Driver/Profile';
import DriverTrucks from './components/Driver/Trucks';

export const useRoutes = (isAuthenticated, userType) => {
    if (isAuthenticated) {
        if (userType === "driver") {
            return (
                <Switch>
                    <Route exact path="/driver" component={Driver} />
                    <Route exact path="/driver/profile" component={DriverProfile} />
                    <Route exact path="/driver/trucks" component={DriverTrucks} />
                    <Route exact path="/logout" component={Logout}/>
                    <Redirect to="/driver" />
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