// Core
import React from 'react';

export const NotFound = (props) => {
    return (
        <h1>
            You have been redirected to&nbsp;
            {props.location.pathname} because you met an alien! 👽
        </h1>
    );
};
