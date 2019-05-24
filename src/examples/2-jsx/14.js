// Core
import React from 'react';
import { render } from 'react-dom';

const UiKit = {
    Header() {
        return <h1>A Header.</h1>;
    },
    Content() {
        return <h1>A Content.</h1>;
    },
    Footer() {
        return <h1>A Footer.</h1>;
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
