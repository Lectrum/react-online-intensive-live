// Core
import React, { useContext } from 'react';

// Instruments
import Styles from './styles.module.css';

// Component
import { Context } from '../';

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
