// Core
import React, { Component, useRef } from 'react';
import { render } from 'react-dom';

/**
 * Функциональным компонентам нельзя передавать ref
 * потому что у них нет экземпляров.
 */
class Input extends Component {
    state = {
        isCoral: true,
    };

    _toggleColor = () => this.setState(({ isCoral }) => ({ isCoral: !isCoral }));

    render() {
        const { isCoral } = this.state;

        const text = isCoral ? 'coral' : 'rebeccapurple';

        return (
            <h1 style = {{ color: isCoral ? 'coral' : 'rebeccapurple' }}>
                🐈 {text}
            </h1>
        );
    }
}

/**
 * Будучи привязанной к классовому компоненту
 * получает ссылку на его экземпляр.
 */
const Parent = () => {
    const inputRef = useRef(null);

    return (
        <>
            <Input ref = { inputRef } />
            <button onClick = { () => inputRef.current._toggleColor() }>
                Click
            </button>
        </>
    );
};

render(<Parent />, document.getElementById('root'));
