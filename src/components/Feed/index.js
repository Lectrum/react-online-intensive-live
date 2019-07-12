// Core
import React, { useState, useEffect } from 'react';

// Components
import * as Components from '../../components';

// Instruments
import Styles from './styles.module.css';
import { api } from '../../Api';
import { useSocket } from './useSocket';

export const Feed = () => {
    const [ posts, setPosts ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    useSocket(posts, setPosts);

    const fetchPosts = async () => {
        setIsFetching(true);
        const fetchedPosts = await api.fetchPosts();
        setPosts(fetchedPosts);
        setIsFetching(false);
    };

    const likePost = async (id) => {
        setIsFetching(true);
        const likedPost = await api.likePost(id);
        setPosts(
            posts.map((post) => post.id === likedPost.id ? likedPost : post),
        );
        setIsFetching(false);
    };

    const createPost = async (comment) => {
        setIsFetching(true);
        const createdPost = await api.createPost(comment);
        setPosts([ createdPost, ...posts ]);
        setIsFetching(false);
    };

    const removePost = async (id) => {
        setIsFetching(true);
        await api.removePost(id);
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
            <Components.Composer createPost = { createPost } />
            {postsJSX}
        </section>
    );
};
