// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    state = {
        count: 0,
    };

    _increment = () => {
        setTimeout(() => {
            this.setState(({ count }) => ({
                count: count + 1,
            }));
        }, 1000);
    };

    render() {
        const { count } = this.state;

        console.log('→ render');

        return <button onClick = { this._increment }>Increment: {count}</button>;
    }
}

render(<Parent />, document.getElementById('root'));
