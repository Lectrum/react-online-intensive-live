// Core
import React, { useState, useEffect } from 'react';
import {
    Transition,
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import GSAP from 'gsap';

// Components
import * as Components from '../';

// Instruments
import Styles from './styles.module.css';
import { api, TOKEN } from '../../Api';
import { useSocket } from '../../hooks';

export const Feed = () => {
    const [ posts, setPosts ] = useState([]);
    const [ isPostsFetching, setPostsFetching ] = useState(false);

    const _fetchPosts = async () => {
        setPostsFetching(true);

        const response = await fetch(api, {
            method: 'GET',
        });

        const { data: posts } = await response.json();

        setPosts(posts);
        setPostsFetching(false);
    };

    useEffect(() => {
        _fetchPosts();
    }, []);
    useSocket(posts, setPosts);

    const _createPost = async (comment) => {
        setPostsFetching(true);

        const response = await fetch(api, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post } = await response.json();

        setPosts((prevPosts) => [ post, ...prevPosts ]);
        setPostsFetching(false);
    };

    const _likePost = async (id) => {
        setPostsFetching(true);

        const response = await fetch(`${api}/${id}`, {
            method:  'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();

        const newPosts = posts.map((post) => post.id === likedPost.id ? likedPost : post);

        setPosts(newPosts);
        setPostsFetching(false);
    };

    const _removePost = async (id) => {
        setPostsFetching(true);

        await fetch(`${api}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });

        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        setPostsFetching(false);
    };

    const _animateComposerEnter = (composer) => {
        GSAP.fromTo(
            composer,
            1,
            { opacity: 0, rotationX: 50 },
            {
                opacity:   1,
                rotationX: 0,
            },
        );
    };

    const postsJSX = posts.map((post) => {
        return (
            <CSSTransition
                classNames = {{
                    enter:       Styles.postInStart,
                    enterActive: Styles.postInEnd,
                    exit:        Styles.postOutStart,
                    exitActive:  Styles.postOutEnd,
                }}
                key = { post.id }
                timeout = {{
                    enter: 500,
                    exit:  400,
                }}>
                <Components.Catcher>
                    <Components.Post
                        { ...post }
                        _likePost = { _likePost }
                        _removePost = { _removePost }
                    />
                </Components.Catcher>
            </CSSTransition>
        );
    });

    return (
        <section className = { Styles.feed }>
            <Components.Spinner isSpinning = { isPostsFetching } />
            <Components.StatusBar />
            <Transition
                appear
                in
                timeout = { 4000 }
                onEnter = { _animateComposerEnter }>
                <Components.Composer _createPost = { _createPost } />
            </Transition>
            <Components.Postman />
            <TransitionGroup>{postsJSX}</TransitionGroup>
        </section>
    );
};
