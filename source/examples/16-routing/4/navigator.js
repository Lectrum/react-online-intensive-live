// Core
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigator = (function*() {
    let route = 0;

    while (true) {
        const query = route % 2 ? '?key=value' : '';
        yield history.push(`/new-address-${(route += 1)}${query}`, {
            title: `A ${route} route title`,
            meta:  `a meta info for a ${route} route`,
        });
    }
}());
