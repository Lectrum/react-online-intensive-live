// Core
import React from 'react';
import { render } from 'react-dom';

const Content = (props) => {
    const internalData = {
        prefix1: '→',
        prefix2: '✓',
    };
    const content = props.render(internalData);

    return <div className = 'start'>{content}</div>;
};

const App = () => {
    return (
        <Content
            render = { (internalData) => {
                return (
                    <h1>
                        {internalData.prefix2}
                        &nbsp; Добро пожаловать!
                    </h1>
                );
            } }
        />
    );
};

render(<App />, document.getElementById('root'));
