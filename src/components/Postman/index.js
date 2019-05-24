// Core
import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import GSAP from 'gsap';

// Instruments
import Styles from './styles.module.css';

// Components
import { Context } from '../';

export const Postman = () => {
    const context = useContext(Context);

    const _animatePostmanEnter = (postman) => {
        GSAP.fromTo(postman, 1, { x: 400 }, { x: 0 });
    };

    const _animatePostmanExit = (postman) => {
        GSAP.fromTo(postman, 1, { x: 0 }, { x: 400 });
    };

    return (
        <Transition
            appear
            in
            timeout = { 5000 }
            onEnter = { _animatePostmanEnter }
            onEntered = { _animatePostmanExit }>
            <section className = { Styles.postman }>
                <img src = { context.avatar } />
                <span>Welcome online, {context.currentUserFirstName}</span>
            </section>
        </Transition>
    );
};
