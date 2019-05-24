// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

// Instruments
import Styles from './styles.m.css';

// Components
import { Checkbox } from './Checkbox';

class Todo extends Component {
    state = { completed: false };

    _complete = () => this.setState(({ completed }) => ({ completed: !completed }));

    render() {
        const { completed } = this.state;

        const text = completed ? 'Task completed' : 'Task not completed';

        return (
            <div className = { Styles.todo }>
                <div className = { Styles.layout }>
                    <Checkbox
                        checked = { completed }
                        color1 = '#161619'
                        color2 = '#EFF9FE'
                        onClick = { this._complete }
                    />
                    <code>{text}</code>
                </div>
            </div>
        );
    }
}

render(<Todo />, document.getElementById('root'));
