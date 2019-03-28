// Core
import React, { useContext } from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

// Component
import { Context } from '../Context';

export const Post = () => {
    const context = useContext(Context);

    return (
        <section className = { Styles.post }>
            <img src = { context.avatar } />
            <a>{`${context.currentUserFirstName} ${
                context.currentUserLastName
            }`}
            </a>
            <time>{moment().format('MMMM D h:mm:ss a')}</time>
            <p>Howdy!</p>
        </section>
    );
};
