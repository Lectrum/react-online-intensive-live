// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import { Nav4, Home, Faq, Contact, NotFound } from './common/components';

// Instruments
import { book } from './common/book';

export const Routes = () => {
    return (
        <>
            <Nav4 />
            <Switch>
                <Route
                    exact
                    path = { book.home }
                    render = { (props) => {
                        return <Home { ...props } />;
                    } }
                />
                <Route
                    exact
                    children = { (props) => {
                        return <Faq { ...props } />;
                    } }
                    path = { book.faq }
                />
                <Route
                    sensitive
                    strict
                    path = '/contact'>
                    {(props) => <Contact { ...props } />}
                </Route>
                <Route component = { NotFound } />
            </Switch>
        </>
    );
};
