// Core
import React, { Children } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return Children.only(props.children);
};

const Parent = () => {
    return (
        <Child>
            <h1>Only one child.</h1>
        </Child>
    );
};

render(<Parent />, document.getElementById('root'));
