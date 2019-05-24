// Core
import { createElement } from 'react';
import { render } from 'react-dom';

render(
    createElement('h1', null, 'Hi, I am a React element.'),
    document.getElementById('root'),
    () => {
        console.log('→ app rendered!');
    },
);
