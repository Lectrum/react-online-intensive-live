// Core
import React from 'react';

// Components
import * as Components from '../../components';

// Instruments
import Styles from './styles.module.css';

export const Feed = () => {
    return (
        <section className = { Styles.feed }>
            <Components.StatusBar />
            <Components.Composer />
            <Components.Post />
        </section>
    );
};
