// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = ({ firstName, lastName }) => {
    return (
        <h1>
            Hi, {firstName} {lastName}!
        </h1>
    );
};

class Parent extends Component {
    profile = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    render() {
        return <Child { ...this.profile } />;
    }
}

render(<Parent />, document.getElementById('root'));
