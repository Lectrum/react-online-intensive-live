// Core
import React, { Component } from 'react';

export class Parent extends Component {
    state = {
        name: '',
    };

    _updateName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        const { name } = this.state;

        return (
            <section>
                <h1>Welcome, {name}!</h1>
                <input
                    value = { name }
                    onChange = { this._updateName }
                />
            </section>
        );
    }
}
