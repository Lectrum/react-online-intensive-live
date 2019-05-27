// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const UiKit = {
    Header: class extends Component {
        render() {
            return <h1>A Header.</h1>;
        }
    },
    Content: class extends Component {
        render() {
            return <h2>A Content.</h2>;
        }
    },
    Footer: class extends Component {
        render() {
            return <h3>A Footer.</h3>;
        }
    },
};

render(
    <>
        <UiKit.Header />
        <UiKit.Content />
        <UiKit.Footer />
    </>,
    document.getElementById('root'),
);
