// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.m.css';
import { book } from '../book';

export class Nav6 extends Component {
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
                    to = { `${book.contact}/` }>
                    Contact →
                </NavLink>
                <NavLink
                    activeClassName = { Styles.active }
                    to = { book.custom }>
                    Somewhere else →
                </NavLink>
            </section>
        );
    }
}
