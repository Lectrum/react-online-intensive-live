// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    _handleClick1 = () => {
        return false;
    };

    _handleClick2 = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className = 'centered'>
                <a
                    href = 'https://www.google.com'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                    onClick = { this._handleClick1 }>
                    Link 1
                </a>
                <br />
                <a
                    href = 'https://www.google.com'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                    onClick = { this._handleClick2 }>
                    Link 2
                </a>
            </div>
        );
    }
}

render(<Parent />, document.getElementById('root'));
