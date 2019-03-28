// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    constructor(props) {
        super(props);

        console.log('→ this.props', this.props);
    }

    render() {
        return <h1>{this.props.spell}</h1>;
    }
}

render(<Parent spell = 'Crucio!' />, document.getElementById('app'));
