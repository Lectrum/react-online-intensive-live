// Core
import React, { useContext } from 'react';
import moment from 'moment';

// Components
import * as Components from '../../components';

// Instruments
import Styles from './styles.module.css';

export const Post = (props) => {
    const context = useContext(Components.Context);

    const cross = `${props.firstName} ${props.lastName}`
        === `${context.currentUserFirstName} ${context.currentUserLastName}` && (
        <span
            className = { Styles.cross }
            onClick = { () => props.removePost(props.id) }
        />
    );

    return (
        <section className = { Styles.post }>
            {cross}
            <img src = { props.avatar } />
            <a>{`${props.firstName} ${props.lastName}`}</a>
            <time>{moment.unix(props.created).format('MMMM D h:mm:ss a')}</time>
            <p>{props.comment}</p>
            <Components.Like
                id = { props.id }
                likePost = { props.likePost }
                likes = { props.likes }
            />
        </section>
    );
};
