// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-transition-group';
import TweenMax from 'gsap';

const Room = () => {
    const [ show, setShow ] = useState(true);

    const handleBallEnter = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                opacity:   0,
                rotationY: 360,
            },
            {
                opacity:   1,
                rotationY: 0,
            },
        );
    };

    const handleBallExit = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                opacity:   1,
                rotationY: 0,
            },
            {
                opacity:   0,
                rotationY: 360,
            },
        );
    };

    return (
        <section className = 'example'>
            <button onClick = { () => setShow(true) }>Show</button>
            <button onClick = { () => setShow(false) }>Hide</button>
            <Transition
                appear
                in = { show }
                timeout = { 2000 }
                onEnter = { handleBallEnter }
                onExit = { handleBallExit }>
                <b>λ</b>
            </Transition>
        </section>
    );
};

render(<Room />, document.getElementById('root'));
