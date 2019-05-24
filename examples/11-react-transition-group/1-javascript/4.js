// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

// Instruments
import { log } from '../../helpers';

const Animation = () => {
    const [ isEntering, setIsEntering ] = useState(false);

    const toggleAnimate = () => setIsEntering((prevIsEntering) => !prevIsEntering);

    const handleEnter = (circle) => {
        log('→ entering start (enter)', 'orange');
        gsap.fromTo(circle, 5, { opacity: 0 }, { opacity: 1 });
    };

    const handleExit = (circle) => {
        log('→ exiting start (exit)', 'skyblue');
        gsap.fromTo(circle, 5, { opacity: 1 }, { opacity: 0 });
    };

    const handleEntering = () => {
        log('→ entering', 'orange');
    };

    const handleEntered = () => {
        log('→ entered', 'orange');
    };

    const handleExiting = () => {
        log('→ exiting', 'skyblue');
    };

    const handleExited = () => {
        log('→ exited', 'skyblue');
    };

    return (
        <section className = 'example'>
            <button onClick = { toggleAnimate }>Анимировать</button>
            <Transition
                appear
                mountOnEnter
                unmountOnExit
                in = { isEntering }
                timeout = { 3000 }
                onEnter = { handleEnter }
                onEntered = { handleEntered }
                onEntering = { handleEntering }
                onExit = { handleExit }
                onExited = { handleExited }
                onExiting = { handleExiting }>
                <b />
            </Transition>
            <div />
        </section>
    );
};

render(<Animation />, document.getElementById('root'));
