// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return <h1>{props.message}</h1>;
};

const Parent = () => {
    return <Child message = 'Hello.' />;
};

render(<Parent />, document.getElementById('root'));
