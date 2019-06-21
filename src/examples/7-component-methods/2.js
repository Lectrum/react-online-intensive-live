// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };

        this._increment = this._increment.bind(this);
    }

    _increment() {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    }

    render() {
        const { count } = this.state;

        return <button onClick = { this._increment }>Increment: {count}</button>;
    }
}

render(<Parent />, document.getElementById('root'));
