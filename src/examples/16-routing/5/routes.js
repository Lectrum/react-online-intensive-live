// Core
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Instruments
import { history } from '../common/history';

// Components
import { Nav1, Home, Faq } from '../common/components';

export class Routes extends Component {
    componentDidMount() {
        const {
            location: { pathname },
        } = history;

        if (pathname !== '/home' && pathname !== '/faq') {
            history.replace('/home');
        }
    }

    render() {
        return (
            <>
                <Nav1 />
                <Route
                    component = { Home }
                    path = '/home'
                />
                <Route
                    component = { Faq }
                    exact = { false }
                    path = '/faq'
                />
            </>
        );
    }
}
