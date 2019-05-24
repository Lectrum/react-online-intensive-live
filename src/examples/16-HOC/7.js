// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

// Utility
import { withLogging } from './HOC-utils/withLogging-2';

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

const options = { delay: 5000, color: 'lime' };

const configuredWithLogging = withLogging(options);
const EnhancedApp = configuredWithLogging(App);

// const EnhancedApp = withLogging(options)(App)

render(<EnhancedApp />, document.getElementById('root'));
