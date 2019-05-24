// Core
import React, { Component } from 'react';

export class Tracker extends Component {
    state = {
        x: 0,
    };

    _handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
        });
    };

    render() {
        const { render } = this.props;

        let result = render(this.state);

        return (
            <div
                className = 'tracker'
                onMouseMove = { this._handleMouseMove }>
                {result}
            </div>
        );
    }
}
