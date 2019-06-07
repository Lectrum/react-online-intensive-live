// Core
import React from 'react';

// Components
import { Feed, Provider } from '../components';

// Instruments
import avatar from '../theme/assets/lisa.png';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};

export const App = () => {
    return (
        <Provider value = { options }>
            <Feed />
        </Provider>
    );
};
