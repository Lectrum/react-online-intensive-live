// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    renders = 0;

    _increaseAge = () => this.setState((prevState) => ({ age: prevState.age + 1 }));

    _getPowers = () => {
        setImmediate(() => {
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
        });
    };

    render() {
        const { name, age } = this.state;

        this.renders += 1;
        console.log('→ renders:', this.renders);

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

render(<Wizard />, document.getElementById('root'));
