// Core
import React from 'react';
import { render } from 'react-dom';

const element = (
    <ul>
        <li>This is valid HTML &amp; JSX at the same time.</li>
        <li>&lt;3</li>
        <li>{'<3'}</li>
    </ul>
);

render(element, document.getElementById('root'));
