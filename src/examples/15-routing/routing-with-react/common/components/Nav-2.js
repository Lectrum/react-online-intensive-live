// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Instruments
import Styles from './styles.module.css';
import { book } from '../book';

export const Nav2 = () => {
    return (
        <section className = { Styles.navigation }>
            <Link to = { book.home }>Home →</Link>
            <br />
            <Link to = { book.faq }>FAQ →</Link>
            <br />
        </section>
    );
};
