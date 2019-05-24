// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.module.css';
import { book } from '../book';

export const Nav4 = () => {
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
};
