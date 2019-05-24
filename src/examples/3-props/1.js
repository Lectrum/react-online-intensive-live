// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

const Parent = () => {
    return <Child message = 'Hello.' />;
};

render(<Parent />, document.getElementById('root'));
