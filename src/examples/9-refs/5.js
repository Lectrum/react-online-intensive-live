// Core
import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { render } from 'react-dom';

const Input = forwardRef((props, forwardedRef) => {
    return (
        <input
            disabled = { !props.isEditing }
            ref = { forwardedRef }
            value = { props.name }
            onChange = { props.onChange }
        />
    );
});

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
            <Input
                isEditing = { isEditing }
                name = { name }
                ref = { nameInputRef }
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
