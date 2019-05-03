// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.m.css';
import { book } from '../book';

export class Nav4 extends Component {
    render() {
        return (
            <section className = { Styles.navigation }>
                <NavLink
                    activeClassName = { Styles.active }
                    to = { book.home }>
                    Home →
                </NavLink>
                <NavLink
                    activeClassName = { Styles.active }
                    to = { book.faq }>
                    FAQ →
                </NavLink>
                <NavLink
                    activeClassName = { Styles.active }
                    to = '/CoNtAcT'>
                    Contact →
                </NavLink>
                <NavLink
                    replace
                    activeClassName = { Styles.active }
                    to = {{
                        pathname: '/somewhere',
                        search:   '?some=search',
                        hash:     '#howdy',
                        state:    {
                            meta:          'information for modal',
                            fromDashboard: true,
                        },
                    }}>
                    Somewhere else →
                </NavLink>
            </section>
        );
    }
}
