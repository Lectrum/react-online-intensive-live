// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    constructor() {
        super();

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        console.log('→ this', this);
    }

    render() {
        return <button onClick = { this._handleClick }>Click</button>;
    }
}

render(<Parent />, document.getElementById('root'));
