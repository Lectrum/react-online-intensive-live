// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

// Utility
import { withHover } from './HOC-utils/withHover';

@withHover({ color1: 'gold', color2: 'navy', fontSize: 32 })
class Header extends Component {
    render() {
        const { style } = this.props;

        return (
            <header>
                <h1 style = { style }>A story of two</h1>
            </header>
        );
    }
}

@withHover({ color1: 'deepskyblue', color2: 'firebrick', fontSize: 24 })
class Body extends Component {
    render() {
        const { style } = this.props;

        return <main style = { style }>Once upon a time...</main>;
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Body />
            </>
        );
    }
}

render(<App />, document.getElementById('root'));
