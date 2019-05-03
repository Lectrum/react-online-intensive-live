// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    constructor(props) {
        super(props);

        console.log('→ constructor props', props);
        console.log('→ constructor this.props', this.props);
    }

    render() {
        console.log('→ render this.props', this.props);

        return <h1>{this.props.spell}</h1>;
    }
}

render(<Parent spell = 'Crucio!' />, document.getElementById('app'));
