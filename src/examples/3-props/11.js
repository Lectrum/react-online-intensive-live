// Core
import React from 'react';
import { render } from 'react-dom';
import { string, bool } from 'prop-types';

const Parent = (props) => {
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

Parent.defaultProps = {
    visible:   true,
    firstName: 1234,
    lastName:  '️❗️ NO_LAST_NAME',
};

Parent.propTypes = {
    visible:   bool.isRequired,
    firstName: string.isRequired,
    lastName:  string.isRequired,
};

render(<Parent />, document.getElementById('root'));
