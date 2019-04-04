// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    render() {
        const { name, age } = this.state;

        // :(
        this.setState({
            age: 6001,
        });

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
