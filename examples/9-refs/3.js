// Core
import React, { Component, createRef } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    state = {
        name:      'Santa',
        isEditing: true,
    };

    componentDidMount() {
        this.nameInputRef.current.focus();
    }

    componentDidUpdate() {
        if (this.state.isEditing) {
            this.nameInputRef.current.focus();
        }
    }

    nameInputRef = createRef();

    _updateName = (event) => this.setState({ name: event.target.value });
    _toggleEditingName = () => this.setState(({ isEditing }) => ({ isEditing: !isEditing }));

    render() {
        const { name, isEditing } = this.state;

        const buttonText = `Turn editing ${isEditing ? 'off' : 'on'}`;

        return (
            <>
                <h1>Enter your name: {name}</h1>
                <input
                    disabled = { !isEditing }
                    ref = { this.nameInputRef }
                    value = { name }
                    onChange = { this._updateName }
                />
                <button onClick = { this._toggleEditingName }>{buttonText}</button>
                <button onClick = { () => this.nameInputRef.current.focus() }>
                    Focus
                </button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('root'));
