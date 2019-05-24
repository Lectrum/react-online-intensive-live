// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.module.css';
import { book } from '../book';

export const Nav5 = () => {
    return (
        <section className = { Styles.navigation }>
            <NavLink
                activeClassName = { Styles.active }
                to = { book.home }>
                Home →
            </NavLink>
            <NavLink
                replace
                activeClassName = { Styles.active }
                to = { book.faq }>
                FAQ →
            </NavLink>
            <NavLink
                activeClassName = { Styles.active }
                to = { book.contact }>
                Contact →
            </NavLink>
            <NavLink
                activeClassName = { Styles.active }
                to = { book.custom }>
                Custom →
            </NavLink>
            <NavLink
                activeClassName = { Styles.active }
                to = '/no...'>
                Somewhere else →
            </NavLink>
        </section>
    );
};
