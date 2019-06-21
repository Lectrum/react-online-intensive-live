// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

import { ErrorBoundary } from './ErrorBoundary-1';

const Release = () => {
    const [ areBugsReleased, setAreBugsReleased ] = useState(false);

    const releaseBugs = () => setAreBugsReleased(true);

    if (areBugsReleased) {
        throw new Error('Can not read property n of undefined! 💯✅');
    }

    return <button onClick = { releaseBugs }>Релизнуть.</button>;
};

const Parent = () => {
    return (
        <>
            <h1>Скоро новый релиз, ура! 🎉</h1>
            <ErrorBoundary>
                <Release />
            </ErrorBoundary>
        </>
    );
};

render(
    <ErrorBoundary>
        <Parent />
    </ErrorBoundary>,
    document.getElementById('root'),
);
