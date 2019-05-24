// Core
import React, { Component } from 'react';

// Context
import { Context } from './context';

class Page extends Component {
    static contextType = Context;

    render() {
        return (
            <>
                <h1>{this.context.title}</h1>
                <ul>
                    <li>
                        Page: <code>{this.context.page}</code>
                    </li>
                </ul>
            </>
        );
    }
}

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
