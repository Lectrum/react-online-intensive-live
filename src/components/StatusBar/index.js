// Core
import React, { useContext } from 'react';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';

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
