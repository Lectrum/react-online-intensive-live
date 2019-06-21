// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { log } from '../helpers';

// Компонент-коробка, умеет хранить урожай
class Storage extends Component {
    constructor() {
        super();

        log('CHILD → constructor', 'wheat');
    }

    state = {
        apples:  0,
        carrots: 5,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        log('CHILD → static getDerivedStateFromProps', 'orange');

        if (nextProps.apples > prevState.apples) {
            return {
                apples: nextProps.apples,
            };
        }

        return null;
    }

    componentDidMount() {
        log('CHILD → componentDidMount', 'lime');
    }

    shouldComponentUpdate(nextProps, nextState) {
        log('CHILD → shouldComponentUpdate', 'olive');

        return this.props !== nextProps || this.state !== nextState;
    }

    getSnapshotBeforeUpdate() {
        log('CHILD → getSnapshotBeforeUpdate', 'coral');

        return null;
    }

    componentDidUpdate() {
        log('CHILD → componentDidUpdate', 'yellow');
    }

    componentWillUnmount() {
        log('CHILD → componentWillUnmount', 'skyblue');
    }

    _yieldCarrot = () => this.setState(({ carrots }) => ({ carrots: carrots + 1 }));

    render() {
        const { apples, carrots } = this.state;

        log('CHILD → render', 'red');

        const carrotsJSX = Array(carrots).fill('🥕');
        const applesJSX = Array(apples).fill('🍎');

        return (
            <>
                <h1>📦 Коробка с овощами и фруктами.</h1>
                <h3>У тебя {apples} яблок.</h3>
                <h3>У тебя {carrots} моркови.</h3>
                <p>Моркови: {carrotsJSX}</p>
                <p>Яблок: {applesJSX}</p>
                <button onClick = { this._yieldCarrot }>Собрать 🥕</button>
            </>
        );
    }
}

// Компонент-ферма, можно собирать урожай
class Farm extends Component {
    constructor() {
        super();

        log('PARENT → constructor', 'wheat');
    }

    state = {
        apples:        5,
        isStorageOpen: true,
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

    _toggleStorage = () => this.setState(({ isStorageOpen }) => ({
        isStorageOpen: !isStorageOpen,
    }));

    render() {
        const { apples, isStorageOpen } = this.state;
        const applesJSX = Array(apples).fill('🍎');

        log('PARENT → render', 'red');

        return (
            <section className = 'example'>
                <h1>👩🏼‍🌾 Привет, фермер Уолтер Уайт.</h1>
                <p>Яблок: {applesJSX}</p>
                <button onClick = { this._toggleStorage }>
                    Открыть/закрыть 📦
                </button>
                <button onClick = { this._yieldApples }>Собрать 🍎</button>
                {isStorageOpen && <Storage apples = { apples } />}
            </section>
        );
    }
}

render(<Farm />, document.getElementById('root'));
