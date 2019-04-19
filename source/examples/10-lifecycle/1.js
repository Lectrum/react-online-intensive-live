// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    static getDerivedStateFromProps() {
        console.log('→ getDerivedStateFromProps');

        return null;
    }

    constructor() {
        super();

        console.log('→ constructor');
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

render(<Parent />, document.getElementById('app'));
