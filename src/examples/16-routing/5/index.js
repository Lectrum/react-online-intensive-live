// Instruments
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from '../common/history';

// Routes
import { Routes } from './routes';

render(
    <Router history = { history }>
        <Routes />
    </Router>,
    document.getElementById('app'),
);
