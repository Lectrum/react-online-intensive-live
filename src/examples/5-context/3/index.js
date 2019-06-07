// Core
import React from 'react';
import { render } from 'react-dom';

// Components
import { Library } from './Library';

// Context
import { Provider } from './context';

const libraryData = {
    title: 'Harry Potter',
    page:  489,
};

render(
    <Provider value = { libraryData }>
        <Library />
    </Provider>,
    document.getElementById('root'),
);
