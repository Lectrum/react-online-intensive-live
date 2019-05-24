// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const increment = () => setTimeout(() => setCount((prevCount) => prevCount + 1), 1000);

    console.log('→ render');

    return <button onClick = { increment }>Increment: {count}</button>;
};

render(<Parent />, document.getElementById('root'));
