// Core
import React, { useState } from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import cx from 'classnames';

// Instruments
import Styles from './styles.module.css';

export const Like = (props) => {
    const [ showLikers, setShowLikers ] = useState(false);

    const _likePost = () => props._likePost(props.id);

    const _getLikedByMe = () => {
        const { currentUserFirstName, currentUserLastName, likes } = props;

        return likes.some(({ firstName, lastName }) => {
            return (
                `${firstName} ${lastName}`
                === `${currentUserFirstName} ${currentUserLastName}`
            );
        });
    };

    const _getLikeStyles = () => {
        const likedByMe = _getLikedByMe();

        return cx(Styles.icon, {
            [ Styles.liked ]: likedByMe,
        });
    };

    const _getLikersList = () => {
        const likesJSX = props.likes.map(({ firstName, lastName, id }) => (
            <li key = { id }>{`${firstName} ${lastName}`}</li>
        ));

        return showLikers ? <ul>{likesJSX}</ul> : null;
    };

    const _getLikesDescription = () => {
        const { likes, currentUserLastName, currentUserFirstName } = props;

        const likedByMe = _getLikedByMe();

        if (likes.length === 1 && likedByMe) {
            return `${currentUserFirstName} ${currentUserLastName}`;
        } else if (likes.length === 2 && likedByMe) {
            return `You and ${likes.length - 1} other`;
        } else if (likedByMe) {
            return `You and ${likes.length - 1} others`;
        }

        return likes.length;
    };

    const likeStyles = _getLikeStyles();
    const likersList = _getLikersList();
    const likesDescription = _getLikesDescription();

    return (
        <section className = { Styles.like }>
            <span
                className = { likeStyles }
                onClick = { _likePost }>
                Like
            </span>
            <div>
                {likersList}
                <span
                    onMouseEnter = { () => setShowLikers(true) }
                    onMouseLeave = { () => setShowLikers(false) }>
                    {likesDescription}
                </span>
            </div>
        </section>
    );
};

Like.propTypes = {
    _likePost: func.isRequired,
    id:        string.isRequired,
    likes:     arrayOf(
        shape({
            id:        string.isRequired,
            firstName: string.isRequired,
            lastName:  string.isRequired,
        }),
    ).isRequired,
};
