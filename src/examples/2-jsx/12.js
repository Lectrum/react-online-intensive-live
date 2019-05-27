// Core
import React from 'react';
import { render } from 'react-dom';

const H2 = () => <h2>...were traveling through the galactic environment.</h2>;

const Book = () => (
    <>
        <h1>In the period of civil war, Rebel spaceships...</h1>
        <H2 />
    </>
);

render(<Book />, document.getElementById('root'));
