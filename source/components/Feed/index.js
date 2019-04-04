// Core
import React, { useState } from 'react';
import moment from 'moment';

// Components
import { StatusBar, Composer, Post, Spinner } from '../../components';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from '../../instruments';

export const Feed = (props) => {
    const [ posts, setPosts ] = useState([
        {
            id:      '123',
            comment: 'Hi there!',
            created: 1526825076849,
            likes:   [],
        },
        {
            id:      '456',
            comment: 'Приветик! 👋🏼',
            created: 1526825076855,
            likes:   [],
        },
    ]);
    const [ isPostsFetching, setPostsFetching ] = useState(false);

    const _createPost = async (comment) => {
        setPostsFetching(true);

        const post = {
            id:      getUniqueID(),
            created: moment.utc().unix(),
            comment,
            likes:   [],
        };

        await delay(1200);

        console.log('→ post', post);

        setPosts((prevPosts) => [ post, ...prevPosts ]);
        setPostsFetching(false);
    };

    const _likePost = async (id) => {
        setPostsFetching(true);

        await delay(1200);

        const newPosts = posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: props.currentUserFirstName,
                            lastName:  props.currentUserLastName,
                        },
                    ],
                };
            }

            return post;
        });

        setPosts(newPosts);
        setPostsFetching(false);
    };

    const _removePost = async (id) => {
        setPostsFetching(true);

        await delay(1200);

        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        setPostsFetching(false);
    };

    const postsJSX = posts.map((post) => {
        return (
            <Post
                key = { post.id }
                { ...post }
                _likePost = { _likePost }
                _removePost = { _removePost }
            />
        );
    });

    console.log('→ posts', posts);

    return (
        <section className = { Styles.feed }>
            <Spinner isSpinning = { isPostsFetching } />
            <StatusBar />
            <Composer _createPost = { _createPost } />
            {postsJSX}
        </section>
    );
};
