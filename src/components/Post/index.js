// Core
import React, { useContext } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

// Instruments
import Styles from './styles.module.css';

// Component
import { Context } from '../Context';
import { Like } from '../Like';

export const Post = (props) => {
    const context = useContext(Context);

    return (
        <section className = { Styles.post }>
            <span
                className = { Styles.cross }
                onClick = { () => props._removePost(props.id) }
            />
            <img src = { context.avatar } />
            <a>{`${context.currentUserFirstName} ${
                context.currentUserLastName
            }`}
            </a>
            <time>{moment.unix(props.created).format('MMMM D h:mm:ss a')}</time>
            <p>{props.comment}</p>
            <Like
                _likePost = { props._likePost }
                id = { props.id }
                likes = { props.likes }
                { ...context }
            />
        </section>
    );
};

Post.propTypes = {
    _likePost:   func.isRequired,
    _removePost: func.isRequired,
    comment:     string.isRequired,
    created:     number.isRequired,
    id:          string.isRequired,
    likes:       array.isRequired,
};
