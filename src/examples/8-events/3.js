// Core
import React from 'react';
import { render } from 'react-dom';
import { log } from '../helpers';

const Parent = () => {
    const logOuterWheel = (event) => log(`deltaX: ${event.deltaX}`, 'orange');
    const logInnerWheel = (event) => log(`deltaY: ${event.deltaY}`, 'wheat');

    return (
        <section
            className = 'centered'
            onWheel = { logOuterWheel }>
            <div
                className = 'ball'
                onWheel = { logInnerWheel }
            />
        </section>
    );
};

render(<Parent />, document.getElementById('root'));
