// Core
import React, { useState, useContext } from 'react';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';

export const Composer = (props) => {
    const [ comment, setComment ] = useState('');
    const context = useContext(Context);

    const submitComment = () => {
        if (!comment) {
            return null;
        }

        props.createPost(comment);
        setComment('');
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        submitComment();
    };

    const submitOnEnter = (event) => {
        const enterKey = event.key === 'Enter';

        if (enterKey) {
            event.preventDefault();
            submitComment();
        }
    };

    return (
        <section className = { Styles.composer }>
            <img src = { context.avatar } />
            <form onSubmit = { handleFormSubmit }>
                <textarea
                    placeholder = { `What's on your mind, ${context.currentUserFirstName}?` }
                    value = { comment }
                    onChange = { (event) => setComment(event.target.value) }
                    onKeyPress = { submitOnEnter }
                />
                <input
                    type = 'submit'
                    value = 'Post'
                />
            </form>
        </section>
    );
};
