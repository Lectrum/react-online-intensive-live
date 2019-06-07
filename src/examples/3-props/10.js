// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { string, bool } from 'prop-types';

class Parent extends Component {
    static defaultProps = {
        visible:   true,
        firstName: 1234,
        lastName:  '️❗️ NO_LAST_NAME',
    };

    static propTypes = {
        visible:   bool.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired,
    };

    render() {
        const { visible, firstName, lastName } = this.props;

        return (
            visible && (
                <ul>
                    <li>
                        First name: <b>{firstName}</b>
                    </li>
                    <li>
                        Last name: <b>{lastName}</b>
                    </li>
                </ul>
            )
        );
    }
}

render(<Parent />, document.getElementById('root'));
