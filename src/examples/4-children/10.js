// Core
import React from 'react';
import { render } from 'react-dom';

const Parent = () => {
    return <h1 children = 'Добро пожаловать в Лабораторию!' />;
};

render(<Parent />, document.getElementById('root'));
