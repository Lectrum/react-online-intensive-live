// Core
import React, { useContext, useState } from 'react';

// Instruments
import Styles from './styles.m.css';

// Component
import { Context } from '../Context';

export const Composer = () => {
    const context = useContext(Context);
    const [ value, setValue ] = useState(0);

    return (
        <section className = { Styles.composer }>
            <img
                src = { context.avatar }
                onClick = { () => setValue(value + 1) }
            />
            {value}
            <form>
                <textarea
                    placeholder = { `What's on your mind, ${
                        context.currentUserFirstName
                    }?` }
                />
                <input
                    type = 'submit'
                    value = 'Post'
                />
            </form>
        </section>
    );
};
