// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Merlin',
        age:  3000,
    };

    _increaseAge = () => this.setState({ age: this.state.age + 1 });

    _getPowers = () => {
        this._increaseAge();
        this._increaseAge();
        this._increaseAge();
    };

    render() {
        const { name, age } = this.state;

        console.log('→ render');

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <button onClick = { this._getPowers }>Get powers!</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
