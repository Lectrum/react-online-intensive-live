// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav3, Home, Faq } from '../common/components';

// Instruments
import { book } from '../common/book';

export class Routes extends Component {
    render() {
        return (
            <>
                <Nav3 />
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
                        path = { book.notFound }
                        render = { (props) => {
                            return (
                                <h1>
                                    You have been redirected to&nbsp;
                                    {props.location.pathname} because you met an
                                    alien! 👽
                                </h1>
                            );
                        } }
                    />
                    <Redirect to = { book.notFound } />
                </Switch>
            </>
        );
    }
}
