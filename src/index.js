// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init.css';

// App
import { App } from './pages/App';

ReactDOM.render(<App />, document.getElementById('root'));

const c = 1;

const pure = (a, b) => {
    // Лексическое окружение

    // window.localStorage.getItem('test'); // сайд-эффект

    return a + b + c;
};
pure(1, 2);

// pure или impure
