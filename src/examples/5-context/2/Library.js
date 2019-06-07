// Core
import React from 'react';

// Context
import { Context } from './context';

const Page = () => {
    return (
        <Context.Consumer>
            {(contextData) => {
                return (
                    <>
                        <h1>{contextData.title}</h1>
                        <ul>
                            <li>
                                Page: <code>{contextData.page}</code>
                            </li>
                        </ul>
                    </>
                );
            }}
        </Context.Consumer>
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
    return <Room />;
};
