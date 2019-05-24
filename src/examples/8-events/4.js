// Core
import React from 'react';
import { render } from 'react-dom';
import { log } from '../helpers';

const Parent = () => {
    const logOuterWheel = (event) => log(`shiftKey: ${event.shiftKey}`, 'orange');
    const logInnerWheel = (event) => log(`ctrlKey: ${event.ctrlKey}`, 'wheat');

    return (
        <div
            className = 'centered'
            onWheel = { logOuterWheel }>
            <div
                className = 'ball'
                onWheel = { logInnerWheel }
            />
        </div>
    );
};

render(<Parent />, document.getElementById('root'));
