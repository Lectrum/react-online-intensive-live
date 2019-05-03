// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

import { ErrorBoundary } from './ErrorBoundary-1';

class Release extends Component {
    state = {
        areBugsReleased: false,
    };

    _releaseBugs = () => {
        this.setState({
            areBugsReleased: true,
        });
    };

    render() {
        if (this.state.areBugsReleased) {
            throw new Error('Can not read property n of undefined! 💯✅');
        }

        return (
            <>
                <button onClick = { this._releaseBugs }>Релизнуть.</button>
            </>
        );
    }
}

class Parent extends Component {
    render() {
        return (
            <>
                <h1>Скоро новый релиз, ура! 🎉</h1>
                <ErrorBoundary>
                    <Release />
                </ErrorBoundary>
            </>
        );
    }
}

render(
    <ErrorBoundary>
        <Parent />
    </ErrorBoundary>,
    document.getElementById('app'),
);
