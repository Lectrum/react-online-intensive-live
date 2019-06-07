// Core
import React, { useContext } from 'react';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';

export const Composer = () => {
    const context = useContext(Context);

    return (
        <section className = { Styles.composer }>
            <img src = { context.avatar } />
            <form>
                <textarea
                    placeholder = { `What's on your mind, ${context.currentUserFirstName}?` }
                />
                <input
                    type = 'submit'
                    value = 'Post'
                />
            </form>
        </section>
    );
};
