// Core
import React, { forwardRef } from 'react';
import { render } from 'react-dom';
import { useSpring, animated } from 'react-spring';

const Ball = forwardRef((props, ref) => {
    return (
        <div
            className = 'ball'
            ref = { ref }
            style = { props.style }>
            ✓
        </div>
    );
});

const Room = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    const AnimatedBall = animated(Ball);

    return (
        <section className = 'room'>
            <AnimatedBall style = { props } />
        </section>
    );
};

render(<Room />, document.getElementById('root'));
