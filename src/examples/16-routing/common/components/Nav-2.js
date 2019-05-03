// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Instruments
import Styles from './styles.m.css';
import { book } from '../book';

export class Nav2 extends Component {
    render() {
        return (
            <section className = { Styles.navigation }>
                <Link to = { book.home }>Home →</Link>
                <br />
                <Link to = { book.faq }>FAQ →</Link>
                <br />
            </section>
        );
    }
}
