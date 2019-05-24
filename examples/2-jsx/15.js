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
            return <h1>A Content.</h1>;
        }
    },
    Footer: class extends Component {
        render() {
            return <h1>A Footer.</h1>;
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
