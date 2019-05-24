// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-spring';
import { v4 } from 'uuid';

// Instruments
import './styles.css';

class Todo {
    key = v4();
    text = 'todo!';
}

class Room extends Component {
    state = {
        todos: [],
    };

    _addTodo = () => {
        this.setState(({ todos }) => ({
            todos: [ ...todos, new Todo() ],
        }));
    };

    _removeTodo = (key) => () => {
        this.setState(({ todos }) => ({
            todos: todos.filter((todo) => todo.key !== key),
        }));
    };

    render() {
        const { todos } = this.state;

        return (
            <section className = 'room'>
                <button onClick = { this._addTodo }>Add todo</button>
                <ul>
                    <Transition
                        enter = {{ opacity: 1, height: 30 }}
                        from = {{ opacity: 0, height: 0 }}
                        items = { todos }
                        keys = { (todo) => todo.key }
                        leave = {{ opacity: 0, height: 0 }}>
                        {(todo) => (styles) => (
                            <li
                                style = { styles }
                                onClick = { this._removeTodo(todo.key) }>
                                {todo.text}
                            </li>
                        )}
                    </Transition>
                </ul>
            </section>
        );
    }
}

render(<Room />, document.getElementById('root'));
