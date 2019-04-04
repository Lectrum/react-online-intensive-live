// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Merlin',
        age:  3000,
    };

    _transform = () => {
        this.setState({
            name: 'Gendalf',
            age:  6000,
        });
    };

    render() {
        const { name, age } = this.state;

        console.log('→ render');

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <button onClick = { this._transform }>Transform</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
