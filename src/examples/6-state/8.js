// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        spells:   [ 'Fireball', 'Ice shield', 'Levitation' ],
        newSpell: '',
    };

    _updateNewSpellName = (event) => {
        console.log('→ event.target', event.target);
        console.log('→ event.target.value', event.target.value);

        if (event.target.value) {
            this.setState({ newSpell: event.target.value });
        }
    };

    _invent = () => {
        this.setState((prevState) => {
            return {
                spells:   [ ...prevState.spells, prevState.newSpell ],
                newSpell: '',
            };
        });
    };

    render() {
        const { spells, newSpell } = this.state;

        const spellsJSX = spells.map((spell, index) => (
            <li key = { index }>{spell}</li>
        ));

        return (
            <>
                <input
                    placeholder = 'Invent a spell'
                    type = 'text'
                    value = { newSpell }
                    onChange = { this._updateNewSpellName }
                />
                <button onClick = { this._invent }>Invent!</button>
                <ul>{spellsJSX}</ul>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('root'));
