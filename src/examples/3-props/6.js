// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        <h1>
            It is <code>{props.CURRENT_YEAR}</code>.
            It will be <code>{props.NEXT_YEAR}</code>.
        </h1>
    );
};

class Parent extends Component {
    CURRENT_YEAR = new Date().getFullYear();
    PREFIX_1 = 'CURRENT';
    PREFIX_2 = 'NEXT';

    render() {
        const data = {
            [ `${this.PREFIX_1}_YEAR` ]: this.CURRENT_YEAR,
            [ `${this.PREFIX_2}_YEAR` ]: this.CURRENT_YEAR + 1,
        };

        return <Child { ...data } />;
    }
}

render(<Parent />, document.getElementById('root'));
