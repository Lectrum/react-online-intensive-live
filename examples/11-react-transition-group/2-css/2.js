// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 } from 'uuid';

// Instruments
import Styles from './styles.module.css';

const Animation = () => {
    const [ todos, setTodos ] = useState([]);
    const [ newTodo, setNewTodo ] = useState('');

    const submitTodo = () => {
        setTodos([
            ...todos,
            {
                id:   v4(),
                text: newTodo,
            },
        ]);
        setNewTodo('');
    };

    const removeTodo = (id) => () => setTodos(todos.filter(({ id: todoId }) => id !== todoId));

    const todosJSX = todos.map(({ text, id }) => (
        <CSSTransition
            classNames = {{
                enter:       Styles.enter,
                enterActive: Styles.enterActive,
                exit:        Styles.exit,
                exitActive:  Styles.exitActive,
            }}
            key = { id }
            timeout = {{ enter: 2500, exit: 1000 }}>
            <li onClick = { removeTodo(id) }>{text}</li>
        </CSSTransition>
    ));

    return (
        <section className = 'example'>
            <input
                placeholder = 'todo...'
                type = 'text'
                value = { newTodo }
                onChange = { (event) => setNewTodo(event.target.value) }
            />
            <button onClick = { submitTodo }>Todo!</button>
            <ul>
                <TransitionGroup>{todosJSX}</TransitionGroup>
            </ul>
        </section>
    );
};

render(<Animation />, document.getElementById('root'));
