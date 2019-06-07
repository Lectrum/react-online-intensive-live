// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    console.log('→ props', props);
    console.log('→ typeof props.children', typeof props.children);

    return <h1>{props.children.toUpperCase()}</h1>;
};

const Parent = () => {
    return <Child>{true ? 'Avada kedavra!' : null}</Child>;
};

render(<Parent />, document.getElementById('root'));
