// Core
import React from 'react';
import { render } from 'react-dom';

const Content = (props) => {
    const content = props.render();

    return <div className = 'start'>{content}</div>;
};

const App = () => {
    return (
        <Content
            render = { () => {
                return <h1>Добро пожаловать!</h1>;
            } }
        />
    );
};

render(<App />, document.getElementById('root'));
