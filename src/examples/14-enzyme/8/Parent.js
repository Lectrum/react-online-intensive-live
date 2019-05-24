// Core
import React from 'react';

export const Child = () => <span>A Child component!</span>;

export const Parent = () => {
    return (
        <section>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet!</p>
            <Child />
        </section>
    );
};
