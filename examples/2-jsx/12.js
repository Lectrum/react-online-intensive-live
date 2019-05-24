// Core
import React from 'react';
import { render } from 'react-dom';

const H1 = () => <h1>...were traveling through the galactic environment.</h1>;

const Book = () => (
    <>
        <h1>In the period of civil war, Rebel spaceships...</h1>
        <H1 />
    </>
);

render(<Book />, document.getElementById('root'));
