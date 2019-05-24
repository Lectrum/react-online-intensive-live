// Core
import React from 'react';
import { render, createPortal } from 'react-dom';

const target = document.getElementById('spinner');

const portal = createPortal(
    <h3>Ура, я свободен! 👹 Сейчас я открою портал в АД 🔥!</h3>,
    target,
);

const Book = () => {
    return (
        <>
            <h1>A Book</h1>
            {portal}
        </>
    );
};

render(<Book />, document.getElementById('root'));
