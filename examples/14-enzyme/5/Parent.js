// Core
import React from 'react';

export const Parent = (props) => {
    return (
        <section>
            <h1>Welcome!</h1>
            <p>{props.message}</p>
        </section>
    );
};
