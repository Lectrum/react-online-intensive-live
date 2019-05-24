// Core
import React from 'react';
import { Prompt } from 'react-router-dom';

export const Contact = (props) => {
    return (
        <>
            {props.safe && <Prompt message = 'Are you sure you want to leave?' />}
            <h1>Contact</h1>
        </>
    );
};
