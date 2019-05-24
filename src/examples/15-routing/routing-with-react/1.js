// Core
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// Instruments
import { history } from './common/history';
import { book } from './common/book';

// Components
import { Nav1, Home, Faq } from './common/components';

export const Routes = () => {
    useEffect(() => {
        if (!(history.location.pathname in book)) {
            history.replace(book.home);
        }
    }, []);

    return (
        <>
            <Nav1 />
            <Route
                component = { Home }
                path = { book.home }
            />
            <Route
                component = { Faq }
                exact = { false }
                path = { book.faq }
            />
        </>
    );
};
