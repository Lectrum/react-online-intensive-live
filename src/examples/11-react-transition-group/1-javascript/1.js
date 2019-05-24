// Core
import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

const Room = () => {
    const [ show, setShow ] = useState(true);
    const ballRef = useRef(null);

    useEffect(() => {
        const timerId = setInterval(() => setShow((prevShow) => !prevShow), 2000);

        return () => clearInterval(timerId);
    }, []);

    const handleBallExit = () => {
        TweenMax.fromTo(
            ballRef.current,
            2,
            {
                x:     0,
                y:     0,
                scale: 0.3,
            },
            {
                x:     300,
                y:     300,
                scale: 1,
            },
        );
    };

    const handleBallEnter = () => {
        TweenMax.fromTo(
            ballRef.current,
            2,
            {
                x:     300,
                y:     300,
                scale: 1,
            },
            {
                x:     0,
                y:     0,
                scale: 0.3,
            },
        );
    };

    return (
        <section className = 'example'>
            <Transition
                in = { show }
                timeout = { 2000 }
                onEnter = { handleBallEnter }
                onExit = { handleBallExit }>
                <b ref = { ballRef } />
            </Transition>
        </section>
    );
};

render(<Room />, document.getElementById('root'));
