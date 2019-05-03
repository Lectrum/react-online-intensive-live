// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import { history } from '../history';
import { book } from '../book';

export class Nav1 extends Component {
    _navigateToHome = () => history.push(book.home);
    _navigateToFAQ = () => history.push(book.faq);
    _navigateToFAQNested = () => history.push(`${book.faq}/deeply/nested/route`);

    render() {
        return (
            <section className = { Styles.navigation }>
                <button onClick = { this._navigateToHome }>Home →</button>
                <button onClick = { this._navigateToFAQ }>F.A.Q. →</button>
                <button onClick = { this._navigateToFAQNested }>
                    FAQ nested →
                </button>
            </section>
        );
    }
}
