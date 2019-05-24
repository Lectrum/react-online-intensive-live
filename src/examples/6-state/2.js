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
            name: props.name,
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

const Tower = () => {
    return (
        <Wizard
            age = { 6000 }
            name = 'Gendalf'
        />
    );
};

render(<Tower />, document.getElementById('root'));
