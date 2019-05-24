// Core
import React from 'react';
import { render } from 'react-dom';

const Parent = () => {
    return (
        <>
            <input
                onChange = { (event) => console.log('→ event.type', event.type) }
            />
            <button onClick = { (event) => console.log('→ event.type', event.type) }>
                Click!
            </button>
        </>
    );
};

render(<Parent />, document.getElementById('root'));
