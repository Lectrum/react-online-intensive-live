// Core
import React, { useContext } from 'react';

// Instruments
import Styles from './styles.m.css';

// Component
import { Context } from '../Context';

export const StatusBar = () => {
    const context = useContext(Context);

    return (
        <section className = { Styles.statusBar }>
            <button>
                <img src = { context.avatar } />
                <span>{context.currentUserFirstName}</span>
                &nbsp;
                <span>{context.currentUserLastName}</span>
            </button>
        </section>
    );
};
