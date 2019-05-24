// Core
import { createElement } from 'react';
import { render } from 'react-dom';

const element = createElement('h1', null, [
    1,
    2,
    [ 3, 4, [ 5, 6, [ 7, 8, [ 9, 10 ]]]],
]);

render(element, document.getElementById('root'));
