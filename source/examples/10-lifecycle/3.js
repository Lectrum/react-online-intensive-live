// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { log } from 'helpers';

// Компонент-ферма, можно собирать урожай
class Farm extends Component {
    constructor() {
        super();

        log('PARENT → constructor', 'wheat');
    }

    state = {
        apples: 5,
        farmer: 'Уолтер Уайт',
    };

    static getDerivedStateFromProps() {
        log('PARENT → static getDerivedStateFromProps', 'orange');

        return null;
    }

    componentDidMount() {
        log('PARENT → componentDidMount', 'lime');
    }

    shouldComponentUpdate(nextProps, nextState) {
        log('PARENT → shouldComponentUpdate', 'olive');

        return this.props !== nextProps || this.state !== nextState;
    }

    getSnapshotBeforeUpdate() {
        log('PARENT → getSnapshotBeforeUpdate', 'coral');

        return null;
    }

    componentDidUpdate() {
        log('PARENT → componentDidUpdate', 'yellow');
    }

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

render(<Farm />, document.getElementById('app'));
