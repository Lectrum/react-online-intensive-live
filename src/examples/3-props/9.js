// Core
import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    return (
        props.visible && (
            <ul>
                <li>
                    First name: <b>{props.firstName}</b>
                </li>
                <li>
                    Last name: <b>{props.lastName}</b>
                </li>
            </ul>
        )
    );
};

Child.defaultProps = {
    visible:   true,
    firstName: '❗️ NO_FIRST_NAME',
    lastName:  '️❗️ NO_LAST_NAME',
};

const profile = {
    firstName: 'Hermione',
    lastName:  'Granger',
};

const Parent = () => {
    return (
        <>
            <Child
                visible
                { ...profile }
            />
            <Child />
        </>
    );
};

render(<Parent />, document.getElementById('root'));
