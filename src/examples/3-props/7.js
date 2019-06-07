// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return props.visible ? (
        <ul>
            <li>
                First name: <b>{props.firstName}</b>
            </li>
            <li>
                Last name: <b>{props.lastName}</b>
            </li>
        </ul>
    ) : null;
};

class Parent extends Component {
    profile = {
        firstName: 'Hermione',
        lastName:  'Granger',
    };

    render() {
        return (
            <>
                <Child
                    visible
                    {  ...this.profile }
                />
                <Child
                    visible = { false }
                    { ...this.profile }
                />
            </>
        );
    }
}

render(<Parent />, document.getElementById('root'));
