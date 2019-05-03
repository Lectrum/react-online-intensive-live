// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    render() {
        this.state.name = 'Merlin';

        const { name, age } = this.state;

        return (
            <h1>
                Greetings. My name is {name} and I am {age} years old.
            </h1>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
