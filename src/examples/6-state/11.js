// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        spells: [ 'Fireball', 'Ice shield', 'Levitation' ].map(
            (spell) => `${this.props.prefix} ${spell}`,
        ),
        newSpell: '',
    };

    _updateNewSpellName = (event) => {
        this.setState({
            newSpell: event.target.value,
        });
    };

    _invent = () => {
        this.setState((prevState, props) => {
            return {
                spells: [
                    ...prevState.spells,
                    `${props.prefix} ${prevState.newSpell}`,
                ],
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

render(<Wizard prefix = 'λ' />, document.getElementById('root'));
