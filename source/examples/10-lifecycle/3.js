// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { log } from 'helpers';

// Компонент-ферма, можно собирать урожай
class Farm extends Component {
    state = {
        apples: 5,
        farmer: 'Уолтер Уайт',
    };

    _yieldApples = () => this.setState(({ apples }) => ({ apples: apples + 1 }));

    render() {
        const { farmer, apples } = this.state;
        const applesJSX = Array(apples).fill('🍎');

        log('PARENT → render', 'red');

        return (
            <section className = 'example'>
                <h1>👩🏼‍🌾 Привет, фермер {farmer}.</h1>
                <p>Яблок: {applesJSX}</p>
                <button onClick = { this._yieldApples }>Собрать яблоки 🍎</button>
            </section>
        );
    }
}

render(<Farm />, document.getElementById('root'));
