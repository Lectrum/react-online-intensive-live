// Core
import React from 'react';

// Components
import * as Components from '../components';

// Instruments
import avatar from '../theme/assets/lisa.png';

const options = {
    avatar,
    currentUserFirstName: 'Дмитрий',
    currentUserLastName:  'Вакациенко',
};

export const App = () => {
    return (
        <Components.Provider value = { options }>
            <Components.Feed { ...options } />
        </Components.Provider>
    );
};

// dev
// export default hot(module)(App);

// prod
// export default App;
