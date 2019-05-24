// Core
import React from 'react';
import { render } from 'react-dom';
import { log } from '../helpers';

const Parent = () => {
    const logOuterWheel = (event) => log(`metaKey: ${event.metaKey}, pageX: ${event.pageX}`, 'orange');
    const logInnerWheel = (event) => log(`metaKey: ${event.metaKey}, pageY: ${event.pageY}`, 'wheat');

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
