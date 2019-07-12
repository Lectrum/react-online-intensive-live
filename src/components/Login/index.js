// Core
import React from 'react';

// Instrument
import Styles from './styles.module.css';

export const Login = (props) => {
    const login = () => {
        props.login();
        props.history.replace('/feed');
    };

    return (
        <section className = { Styles.login }>
            <button onClick = { login }>Login</button>
        </section>
    );
};
