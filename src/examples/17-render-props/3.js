// Core
import React from 'react';
import { render } from 'react-dom';

const Content = (props) => {
    const internalData = {
        prefix1: '→',
        prefix2: '✓',
        prefix3: '®',
        prefix4: '~',
    };

    let content = null;

    if (props.children) {
        content = props.children(internalData);
    } else if (props.render) {
        content = props.render(internalData);
    } else if (props.component) {
        content = props.component;
    }

    return <div className = 'start'>{content}</div>;
};

const App = () => {
    return (
        <>
            <Content
                render = { (internalData) => (
                    <h1>
                        {internalData.prefix1}
                        &nbsp; Добро пожаловать 1!
                    </h1>
                ) }
            />
            <Content
                children = { (internalData) => (
                    <h1>
                        {internalData.prefix2}
                        &nbsp; Добро пожаловать 2!
                    </h1>
                ) }
            />
            <Content>
                {(internalData) => (
                    <h1>
                        {internalData.prefix3}
                        &nbsp; Добро пожаловать 3!
                    </h1>
                )}
            </Content>
            <Content component = { <h1>&nbsp; Добро пожаловать 4!</h1> } />
        </>
    );
};

render(<App />, document.getElementById('root'));
