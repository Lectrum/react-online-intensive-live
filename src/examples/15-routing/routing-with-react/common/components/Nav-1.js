// Core
import React from 'react';

// Instruments
import Styles from './styles.module.css';
import { history } from '../history';
import { book } from '../book';

export const Nav1 = () => {
    return (
        <section className = { Styles.navigation }>
            <button onClick = { () => history.push(book.home) }>Home →</button>
            <button onClick = { () => history.push(book.faq) }>F.A.Q. →</button>
            <button
                onClick = { () => history.push(`${book.faq}/deeply/nested/route`) }>
                FAQ nested →
            </button>
        </section>
    );
};
