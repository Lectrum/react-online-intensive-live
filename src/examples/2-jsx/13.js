// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Book = () => <h3>A Book.</h3>;

const Bookshelf = () => (
    <>
        <h2>A Bookshelf.</h2>
        <Book />
    </>
);

class Library extends Component {
    render() {
        return (
            <>
                <h1>A Library.</h1>
                <Bookshelf />
            </>
        );
    }
}

render(<Library />, document.getElementById('root'));
