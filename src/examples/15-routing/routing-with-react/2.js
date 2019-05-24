// Core
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Components
import { Nav2, Home, Faq } from './common/components';

// Instruments
import { book } from './common/book';

export const Routes = withRouter((props) => {
    const {
        location: { pathname },
    } = props;

    const isRedirectNeeded = pathname !== book.home && pathname !== book.faq;

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
            {isRedirectNeeded && <Redirect to = { book.home } />}
        </>
    );
});
