// Core
import React from 'react';
import { render } from 'react-dom';

const element = <h1>Welcome in {new Date().getFullYear()}!</h1>;

render(element, document.getElementById('root'));
