// Core
import React, { useState } from 'react';
import { render } from 'react-dom';
import { v4 } from 'uuid';
import { Transition, TransitionGroup } from 'react-transition-group';
import TweenMax from 'gsap';

const Room = () => {
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

    const handleBallEnter = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                x:         300,
                y:         300,
                opacity:   0,
                rotationY: 360,
            },
            {
                x:         0,
                y:         0,
                opacity:   1,
                rotationY: 0,
            },
        );
    };

    const handleBallExit = (ball) => {
        TweenMax.fromTo(
            ball,
            2,
            {
                x:         0,
                y:         0,
                opacity:   1,
                rotationY: 0,
            },
            {
                x:          -300,
                y:          300,
                opacity:    0,
                rotationY:  1440,
                onComplete: () => console.log('• animation completed •'),
            },
        );
    };

    const todosJSX = todos.map(({ text, id }) => (
        <Transition
            key = { id }
            timeout = { 2000 }
            onEnter = { handleBallEnter }
            onExit = { handleBallExit }>
            <li onClick = { removeTodo(id) }>{text}</li>
        </Transition>
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

render(<Room />, document.getElementById('root'));
