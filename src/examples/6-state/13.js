// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    _doJob = () => {
        this.setState({
            age: 6001,
        });
    };

    render() {
        const { name, age } = this.state;

        // :(
        this._doJob();

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}

render(<Wizard />, document.getElementById('root'));
