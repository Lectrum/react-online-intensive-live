// Core
import React, { useState, useContext } from 'react';

// Context
import { Provider, Context } from './context';

const Page = () => {
    const context = useContext(Context);

    return (
        <>
            <h1>{context.title}</h1>
            <ul>
                <li>
                    Page: <code>{context.page}</code>
                </li>
            </ul>
            <button onClick = { context._goPrevPage }>← Previous page</button>
            <button onClick = { context._goNextPage }>Next page →</button>
        </>
    );
};

const Book = () => {
    return <Page />;
};

const Bookshelf = () => {
    return <Book />;
};

const Room = () => {
    return <Bookshelf />;
};

export const Library = () => {
    const [ title ] = useState('Harry Potter');
    const [ page, setPage ] = useState(489);

    const _goPrevPage = () => setPage((prevPage) => prevPage - 1);
    const _goNextPage = () => setPage((prevPage) => prevPage + 1);

    return (
        <Provider
            children = { <Room /> }
            value = {{
                title,
                page,
                _goNextPage,
                _goPrevPage,
            }}
        />
    );
};
