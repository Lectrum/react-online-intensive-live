// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    constructor() {
        super();

        console.log('→ constructor');
    }

    static getDerivedStateFromProps() {
        console.log('→ getDerivedStateFromProps');

        return null;
    }

    state = {};

    componentDidMount() {
        console.log('→ componentDidMount');
    }

    render() {
        console.log('→ render');

        return <h1>Initialization phase</h1>;
    }
}

render(<Parent />, document.getElementById('root'));
