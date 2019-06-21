// Core
import React, { useState, useContext } from 'react';
import cx from 'classnames';

// Components
import { Context } from '../';

// Instruments
import Styles from './styles.module.css';

export const Like = (props) => {
    const [ showLikers, setShowLikers ] = useState(false);
    const context = useContext(Context);

    const getLikedByMe = () => {
        return props.likes.some(({ firstName, lastName }) => {
            return (
                `${firstName} ${lastName}`
                === `${context.currentUserFirstName} ${context.currentUserLastName}`
            );
        });
    };

    const getLikesDescription = () => {
        const likedByMe = getLikedByMe();

        if (props.likes.length === 1 && likedByMe) {
            return `${context.currentUserFirstName} ${context.currentUserLastName}`;
        } else if (props.likes.length === 2 && likedByMe) {
            return `You and ${props.likes.length - 1} other`;
        } else if (likedByMe) {
            return `You and ${props.likes.length - 1} others`;
        }

        return props.likes.length;
    };

    const likeStyles = cx(Styles.icon, {
        [ Styles.liked ]: getLikedByMe(),
    });

    const likesJSX = props.likes.map(({ firstName, lastName, id }) => (
        <li key = { id }>{`${firstName} ${lastName}`}</li>
    ));

    return (
        <section className = { Styles.like }>
            <span
                className = { likeStyles }
                onClick = { () => props.likePost(props.id) }>
                Like
            </span>
            <div>
                {props.likes.length && showLikers ? <ul>{likesJSX}</ul> : null}
                <span
                    onMouseEnter = { () => setShowLikers(true) }
                    onMouseLeave = { () => setShowLikers(false) }>
                    {getLikesDescription()}
                </span>
            </div>
        </section>
    );
};
