// Core
import React, { useContext } from 'react';

// Components
import { Context } from '../';

// Instrument
import Styles from './styles.module.css';

export const Profile = () => {
    const context = useContext(Context);

    return (
        <section className = { Styles.profile }>
            <h1>
                Welcome, {context.currentUserFirstName}{' '}
                {context.currentUserLastName}
            </h1>
            <img src = { context.avatar } />
        </section>
    );
};
