// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import * as Components from '../components';

// Instruments
import avatar from '../theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};

export const App = hot(module)(() => {
    return (
        <Components.Provider value = { options }>
            <Components.Feed { ...options } />
        </Components.Provider>
    );
});

// dev
// export default hot(module)(App);

// prod
// export default App;
