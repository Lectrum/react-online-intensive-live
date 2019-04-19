// Core
import React, { useContext } from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

// Instruments
import Styles from './styles.m.css';

// Components
import { Context } from '../Context';

export const Postman = () => {
    const context = useContext(Context);

    const _animatePostmanEnter = (postman) => {
        fromTo(postman, 1, { x: 400 }, { x: 0 });
    };

    const _animatePostmanExit = (postman) => {
        fromTo(postman, 1, { x: 0 }, { x: 400 });
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
