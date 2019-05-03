// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import { Routes } from './routes';

render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root'),
);
