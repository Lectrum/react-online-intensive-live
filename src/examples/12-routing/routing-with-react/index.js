// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

// Instruments
import { history } from './common/history';

// Routes
import { Routes } from './5';

render(
    <Router history = { history }>
        <Routes />
    </Router>,
    document.getElementById('root'),
);
