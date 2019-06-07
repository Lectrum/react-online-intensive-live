// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        <h1>
            Hi, {props.firstName} {props.lastName}!
        </h1>
    );
};

class Parent extends Component {
    profile1 = {
        firstName: 'Ron',
    };

    profile2 = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    render() {
        return (
            <Child
                { ...this.profile2 }
                { ...this.profile1 }
            />
        );
    }
}

render(<Parent />, document.getElementById('root'));
