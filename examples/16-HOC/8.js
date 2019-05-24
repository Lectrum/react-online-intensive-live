// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

// Utility
import { withLogging } from './HOC-utils/withLogging-2';

const Header = withLogging({
    delay: 2000,
})(
    class Header extends Component {
        render() {
            return (
                <header>
                    <h1>A story of two</h1>
                </header>
            );
        }
    },
);

const Body = withLogging({
    delay: 3000,
    color: 'lime',
})(
    class Body extends Component {
        render() {
            return <main>Once upon a time...</main>;
        }
    },
);

const App = withLogging({
    delay: 4000,
    color: 'orange',
})(
    class App extends Component {
        render() {
            return (
                <>
                    <Header />
                    <Body />
                </>
            );
        }
    },
);

render(<App />, document.getElementById('root'));
