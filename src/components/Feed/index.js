// Core
import React, { useState, useEffect } from 'react';

// Components
import * as Components from '../../components';

// Instruments
import Styles from './styles.module.css';
import { api, TOKEN, GROUP_ID } from '../../Api';

export const Feed = () => {
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    const fetchPosts = async () => {
        setIsFetching(true);

        const response = await fetch(api, {
            method: 'GET',
        });

        const { data: fetchedPosts } = await response.json();

        setPosts(fetchedPosts);
        setIsFetching(false);
    };

    const likePost = async (id) => {
        setIsFetching(true);

        const response = await fetch(`${api}/${id}`, {
            method:  'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();

        setPosts(
            posts.map((post) => post.id === likedPost.id ? likedPost : post),
        );
        setIsFetching(false);
    };

    const createPost = async (comment) => {
        setIsFetching(true);

        const response = await fetch(api, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: createdPost } = await response.json();

        setPosts([ createdPost, ...posts ]);
        setIsFetching(false);
    };

    const removePost = async (id) => {
        setIsFetching(true);

        await fetch(`${api}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });

        setPosts(posts.filter((post) => post.id !== id));
        setIsFetching(true);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const postsJSX = posts.map((post) => {
        return (
            <Components.Post
                key = { post.id }
                likePost = { likePost }
                removePost = { removePost }
                { ...post }
            />
        );
    });

    return (
        <section className = { Styles.feed }>
            <Components.Spinner isSpinning = { isFetching } />
            <Components.StatusBar />
            <Components.Composer createPost = { createPost } />
            {postsJSX}
        </section>
    );
};
