// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import gsap from 'gsap';

// Instruments
import { log } from '../../helpers';

const Animation = () => {
    const [ isEntering, setIsEntering ] = useState(true);
    const [ circles, setCircles ] = useState(0);

    const handleEnter = (circle) => {
        log('→ entering start (enter)', 'orange');

        gsap.fromTo(circle, 3, { opacity: 0 }, { opacity: 1 });
    };

    const handleExit = (circle) => {
        log('→ exiting start (exit)', 'skyblue');

        gsap.fromTo(circle, 3, { opacity: 1 }, { opacity: 0 });
    };

    /* логи */
    const handleEntering = () => {
        log('→ entering', 'orange');
    };

    const handleEntered = (circle) => {
        let start = null;

        const step = (timestamp) => {
            if (!start) {
                start = timestamp;
            }

            const progress = timestamp - start;

            circle.style.transform = `translateX(${Math.min(progress / 10)}px)`;

            if (progress < 2000) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);

        log('→ entered', 'orange');
    };

    const handleExiting = () => {
        log('→ exiting', 'skyblue');
    };

    const handleExited = () => {
        log('→ exited', 'skyblue');
    };

    const addCircle = () => setCircles(circles + 1);
    const removeCircle = () => setCircles(circles - 1);

    const circlesJSX = [ ...Array(circles).keys() ].map((circle) => {
        return (
            <CSSTransition
                appear
                mountOnEnter
                classNames = 'example'
                key = { circle }
                timeout = { 3000 }
                onEnter = { handleEnter }
                onEntered = { handleEntered }
                onEntering = { handleEntering }
                onExit = { handleExit }
                onExited = { handleExited }
                onExiting = { handleExiting }>
                <b onClick = { removeCircle } />
            </CSSTransition>
        );
    });

    return (
        <section className = 'example'>
            <button onClick = { () => setIsEntering(!isEntering) }>
                Анимировать
            </button>
            <CSSTransition
                classNames = 'example'
                in = { isEntering }
                timeout = { 3000 }
                onEnter = { handleEnter }
                onEntered = { handleEntered }
                onEntering = { handleEntering }
                onExit = { handleExit }
                onExited = { handleExited }
                onExiting = { handleExiting }>
                <b />
            </CSSTransition>
            <button onClick = { addCircle }>Добавить кружок</button>
            <TransitionGroup component = 'span'>{circlesJSX}</TransitionGroup>
        </section>
    );
};

render(<Animation />, document.getElementById('root'));
