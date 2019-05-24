// Core
import { createElement, cloneElement } from 'react';
import { render } from 'react-dom';

const element1 = createElement(
    'h1',
    {
        style: {
            color:      'white',
            userSelect: 'none',
            cursor:     'pointer',
            textAlign:  'center',
            margin:     0,
        },
    },
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const element2 = createElement(
    'div',
    {
        title: 'A title!',
        style: {
            gridRow:        '2',
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
        },
    },
    element1,
);

const element3 = cloneElement(element2, {
    style: {
        backgroundColor: 'black',
        border:          '1px solid white',
        borderRadius:    5,
        padding:         7,
    },
});

render(element3, document.getElementById('root'));
