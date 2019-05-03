// Core
import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Components
import { Nav2, Home, Faq } from '../common/components';

// Instruments
import { book } from '../common/book';

export default withRouter(
    class Routes extends Component {
        render() {
            const {
                location: { pathname },
            } = this.props;

            const isRedirectable
                = pathname !== book.home && pathname !== book.faq;

            return (
                <>
                    <Nav2 />
                    <Route
                        exact
                        component = { Home }
                        path = { book.home }
                    />
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
                    {isRedirectable && <Redirect to = { book.home } />}
                </>
            );
        }
    },
);
