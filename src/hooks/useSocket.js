// Core
import { useEffect, useContext } from 'react';

// Components
import * as Components from '../components';

// Instruments
import { GROUP_ID } from '../Api';
import { socket } from '../socket/init';

export const useSocket = (posts, setPosts) => {
    const context = useContext(Components.Context);

    useEffect(() => {
        const { currentUserFirstName, currentUserLastName } = context;

        socket.emit('join', GROUP_ID);

        socket.on('create', (postJSON) => {
            const { data: createdPost, meta } = JSON.parse(postJSON);

            if (
                `${currentUserFirstName} ${currentUserLastName}`
                !== `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                setPosts((prevPosts) => [ createdPost, ...prevPosts ]);
            }
        });

        socket.on('remove', (postJSON) => {
            const { data: removedPost, meta } = JSON.parse(postJSON);

            if (
                `${currentUserFirstName} ${currentUserLastName}`
                !== `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== removedPost.id));
            }
        });

        socket.on('like', (postJSON) => {
            const { data: likedPost, meta } = JSON.parse(postJSON);

            if (
                `${currentUserFirstName} ${currentUserLastName}`
                !== `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                const newPosts = posts.map((post) => post.id === likedPost.id ? likedPost : post);

                setPosts(newPosts);
            }
        });

        return () => {
            socket.removeListener('create');
            socket.removeListener('remove');
            socket.removeListener('like');
        };
    }, []);
};
