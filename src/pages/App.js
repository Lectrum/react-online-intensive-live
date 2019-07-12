// Core
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import * as Components from '../components';

// Instruments
import avatar from '../theme/assets/lisa.png';
import profile from './profile.json';

export const App = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);

    return (
        <Components.Provider
            value = {{
                ...profile,
                avatar,
            }}>
            <Components.StatusBar
                isAuthenticated = { isAuthenticated }
                logout = { () => setIsAuthenticated(false) }
            />
            <Switch>
                <Route
                    path = '/login'
                    render = { (props) => (
                        <Components.Login
                            login = { () => setIsAuthenticated(true) }
                            { ...props }
                        />
                    ) }
                />
                {!isAuthenticated && <Redirect to = '/login' />}
                <Route
                    component = { Components.Feed }
                    path = '/feed'
                />
                <Route
                    component = { Components.Profile }
                    path = '/profile'
                />
                <Redirect to = '/feed' />
            </Switch>
        </Components.Provider>
    );
};
