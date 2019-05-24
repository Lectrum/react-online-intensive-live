// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    _getPowers = () => {
        this.setState((prevState) => ({
            // eslint-disable-next-line
            age: prevState.age++, // :(
            // age: prevState.age + 1, // :)
        }));
    };

    render() {
        const { name, age } = this.state;

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
