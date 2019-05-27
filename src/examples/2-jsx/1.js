// Core
import React from 'react';
import { render } from 'react-dom';

const element1 = <h1 key = { 0 }>Hi, I am a React element.</h1>;

/**
 * Эти два элементы — эквивалентны, разница только в синтаксисе.
 */

const element2 = React.createElement(
    'h1',
    { key: 1 },
    'Hi, I am a React element.',
);

render([ element1, element2 ], document.getElementById('root'));
