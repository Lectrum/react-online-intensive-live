// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav5, Home, Faq, Contact, NotFound } from '../common/components';

// Instruments
import { book } from '../common/book';

export class Routes extends Component {
    render() {
        return (
            <>
                <Route
                    component = { Nav5 }
                    path = '/'
                />
                <Switch>
                    <Route
                        exact
                        component = { Home }
                        path = { book.home }
                    />
                    <Route
                        exact
                        component = { Faq }
                        path = { book.faq }
                    />
                    <Route
                        exact
                        path = { book.contact }
                        render = { (props) => (
                            <Contact
                                safe
                                { ...props }
                            />
                        ) }
                    />
                    <Route
                        exact
                        component = { NotFound }
                        path = { book.notFound }
                    />
                    <Redirect
                        from = { book.custom }
                        to = { book.home }
                    />
                    <Redirect
                        push
                        to = { book.notFound }
                    />
                </Switch>
            </>
        );
    }
}
