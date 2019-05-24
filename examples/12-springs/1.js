// Core
import React from 'react';
import { render } from 'react-dom';
import { useSpring, animated } from 'react-spring';

const Room = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <section className = 'room'>
            <animated.div
                className = 'ball'
                style = { props }>
                ✓
            </animated.div>
        </section>
    );
};

render(<Room />, document.getElementById('root'));
