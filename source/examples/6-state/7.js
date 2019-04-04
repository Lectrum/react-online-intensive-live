// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Merlin',
        age:  3000,
        0:    'star dust',
        1:    'magic sprinkles',
    };

    _transform = () => {
        this.setState([ 'potion of might', 'potion of invisibility' ]);
    };

    render() {
        const { name, age } = this.state;

        console.log('→ this.state', this.state);

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <p>
                    Psst do you want some magic? I have <b>{this.state[ 0 ]}</b>
                    &nbsp;and&nbsp;
                    <b>{this.state[ 1 ]}</b>.
                </p>
                <button onClick = { this._transform }>Transform</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
