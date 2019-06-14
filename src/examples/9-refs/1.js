// Core
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ name, setName ] = useState('Santa');
    const [ isEditing, setIsEditing ] = useState(true);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            nameInputRef.current.focus();
        }
    }, [ isEditing ]);

    const buttonText = `Turn editing ${isEditing ? 'off' : 'on'}`;

    return (
        <>
            <h1>Enter your name: {name}</h1>
            <input
                disabled = { !isEditing }
                ref = { (inputElement) => {
                    // Логика
                    nameInputRef.current = inputElement;
                } }
                value = { name }
                onChange = { (event) => setName(event.target.value) }
            />
            <button onClick = { () => setIsEditing(!isEditing) }>
                {buttonText}
            </button>
            <button onClick = { () => nameInputRef.current.focus() }>Focus</button>
        </>
    );
};

render(<Parent />, document.getElementById('root'));
