// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.module.css';
import { book } from '../book';

export const Nav3 = () => {
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
                to = { book.notFound }>
                Somewhere else →
            </NavLink>
        </section>
    );
};
