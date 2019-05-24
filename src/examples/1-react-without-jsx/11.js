// Core
import { Component, createElement } from 'react';
import { render } from 'react-dom';

class ClassComponent extends Component {
    render() {
        return createElement('h1', null, 'I am a class component!');
    }
}

const FunctionalComponent = () => {
    return createElement('h1', null, 'I am a functional component!');
};

render(
    [
        createElement(ClassComponent, { key: 0 }),
        createElement(FunctionalComponent, { key: 1 }),
    ],
    document.getElementById('root'),
);
