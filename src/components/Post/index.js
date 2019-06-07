// Core
import React, { useContext } from 'react';
import moment from 'moment';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';

export const Post = () => {
    const context = useContext(Context);

    return (
        <section className = { Styles.post }>
            <img src = { context.avatar } />
            <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
            <time>{moment().format('MMMM D h:mm:ss a')}</time>
            <p>Howdy!</p>
        </section>
    );
};
