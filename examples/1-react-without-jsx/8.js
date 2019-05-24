// Core
import { createElement } from 'react';
import { render } from 'react-dom';

let temp = 0;

const element1 = createElement(
    'h1',
    {
        style: {
            color:      'wheat',
            userSelect: 'none',
            cursor:     'pointer',
        },
        onClick: () => {
            temp += 1;
            console.log('Temp:', temp);
        },
    },
    'Hi, I am a React element. I was produced by «createElement» function.',
);

const element2 = createElement(
    'div',
    {
        style: {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            width:           'auto',
            height:          150,
            padding:         7,
            border:          '5px solid gold',
            borderRadius:    30,
            backgroundColor: 'rebeccapurple',
        },
        title: 'A square!',
    },
    element1,
);

render(element2, document.getElementById('root'));
