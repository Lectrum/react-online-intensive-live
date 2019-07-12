// Instruments
import { MAIN_URI, TOKEN } from './config';

export const api = new class Api {
    async fetchPosts() {
        const response = await fetch(MAIN_URI, {
            method: 'GET',
        });

        const { data: fetchedPosts } = await response.json();

        return fetchedPosts;
    }

    async likePost(id) {
        const response = await fetch(`${MAIN_URI}/${id}`, {
            method:  'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();

        return likedPost;
    }

    async createPost(comment) {
        const response = await fetch(MAIN_URI, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: createdPost } = await response.json();

        return createdPost;
    }

    async removePost(id) {
        await fetch(`${MAIN_URI}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });
    }
}();
