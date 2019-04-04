// Core
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles.m.css';

// Component
import { Context } from '../Context';

export const Composer = (props) => {
    const context = useContext(Context);
    const [ comment, setComment ] = useState('');

    const _submitComment = () => {
        if (!comment) {
            return null;
        }

        props._createPost(comment);
        setComment('');
    };

    const _handleFormSubmit = (event) => {
        event.preventDefault();
        _submitComment();
    };

    const _submitOnEnter = (event) => {
        const enterKey = event.key === 'Enter';

        if (enterKey) {
            event.preventDefault();
            _submitComment();
        }
    };

    return (
        <section className = { Styles.composer }>
            <img src = { context.avatar } />
            <form onSubmit = { _handleFormSubmit }>
                <textarea
                    placeholder = { `What's on your mind, ${
                        context.currentUserFirstName
                    }?` }
                    value = { comment }
                    onChange = { (event) => setComment(event.target.value) }
                    onKeyPress = { _submitOnEnter }
                />
                <input
                    type = 'submit'
                    value = 'Post'
                />
            </form>
        </section>
    );
};

Composer.propTypes = {
    _createPost: PropTypes.func.isRequired,
};
