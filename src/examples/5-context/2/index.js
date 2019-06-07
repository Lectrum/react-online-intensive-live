// Core
import React from 'react';
import { render } from 'react-dom';

// Components
import { Library } from './Library';

// Context
import { Context } from './context';

const libraryData = {
    title: 'Harry Potter',
    page:  489,
};

render(
    <Context.Provider value = { libraryData }>
        <Library />
    </Context.Provider>,
    document.getElementById('root'),
);
