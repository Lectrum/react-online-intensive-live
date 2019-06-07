// Core
import React, { Children } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    const childrenJSX = [];

    console.log('→ props', props);

    Children.forEach(props.children, (child, index) => {
        childrenJSX.push(<li key = { index }>{child}</li>);
    });

    return <ul>{childrenJSX}</ul>;
};

const Parent = () => {
    return (
        <Child>
            <span>First child</span>
            <span>Second child</span>
            <span>Third child</span>
        </Child>
    );
};

render(<Parent />, document.getElementById('root'));
