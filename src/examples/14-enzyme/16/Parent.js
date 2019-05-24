// Core
import React, { Component } from 'react';

export class Parent extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
        };

        this._updateName = this._updateName.bind(this);
        this._submit = this._submit.bind(this);
    }

    _updateName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    _submit(event) {
        event.preventDefault();
        this.props.loginAsync(this.state.name);
        this.setState({
            name: '',
        });
    }

    render() {
        const { name } = this.state;

        return (
            <form onSubmit = { this._submit }>
                <h1>Welcome, {name}!</h1>
                <input
                    type = 'text'
                    value = { name }
                    onChange = { this._updateName }
                />
                <input
                    type = 'submit'
                    value = 'Submit!'
                />
            </form>
        );
    }
}
