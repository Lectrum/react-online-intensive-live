// Core
import React from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const showEventType = (event) => console.log('→ event.type', event.type);

    return (
        <>
            <input onChange = { showEventType } />
            <button onClick = { showEventType }>Click!</button>
        </>
    );
};

render(<Parent />, document.getElementById('root'));
