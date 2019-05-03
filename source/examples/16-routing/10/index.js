// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Routes
import { Routes } from './routes';

const store = createStore((state = {}) => state);

render(
    <Provider store = { store }>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
