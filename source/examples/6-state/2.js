// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    static defaultProps = {
        name: 'Merlin',
        age:  3000,
    };

    constructor(props) {
        super(props);

        this.state = {
            name: props.name, // derived state, производное состояние
            age:  this.props.age,
        };
    }

    render() {
        const { name, age } = this.state;

        return (
            <h1>
                Greetings. My name is {name} and I am {age} years old.
            </h1>
        );
    }
}

class Tower extends Component {
    render() {
        return (
            <Wizard
                age = { 6000 }
                name = 'Gendalf'
            />
        );
    }
}

render(<Tower />, document.getElementById('app'));
