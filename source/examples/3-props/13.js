// Core
import React from 'react';
import { render } from 'react-dom';

const Parent = (props) => {
    const {
        profile: { firstName, lastName },
    } = props;

    // this.props.test = 'error!';
    // this.props.profile.deepTest = 'no error :(';

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
    document.getElementById('app'),
);
