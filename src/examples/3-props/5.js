// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        <h1>
            It is <code>{props.CURRENT_YEAR}</code>.
        </h1>
    );
};

class Parent extends Component {
    CURRENT_YEAR = new Date().getFullYear();

    render() {
        return <Child CURRENT_YEAR = { this.CURRENT_YEAR } />;
    }
}

render(<Parent />, document.getElementById('root'));
