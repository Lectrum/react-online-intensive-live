// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

// Utility
import { withLogging } from './HOC-utils/withLogging-1';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>A story of two</h1>
            </header>
        );
    }
}

class Body extends Component {
    render() {
        return <main>Once upon a time...</main>;
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

const EnhancedApp = withLogging(App);

render(<EnhancedApp />, document.getElementById('root'));
