// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Merlin',
        age:  5000,
    };

    render() {
        this.state = {
            name: 'Gendalf',
            age:  15000,
        };

        const { name, age } = this.state;

        return (
            <h1>
                Greetings. My name is {name} and I am {age} years old.
            </h1>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
