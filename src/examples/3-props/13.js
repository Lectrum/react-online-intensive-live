// Core
import React from 'react';
import { render } from 'react-dom';

const Parent = (props) => {
    const {
        profile: { firstName, lastName },
    } = props;

    // props.test = 'error!';
    // props.profile.firstName = 'no error :(';

    console.log('props:', props);

    return (
        <h1>
            Hello, {firstName} {lastName}!
        </h1>
    );
};

render(
    <Parent
        profile = {{
            firstName: 'Hermione',
            lastName:  'Granger',
        }}
    />,
    document.getElementById('root'),
);
