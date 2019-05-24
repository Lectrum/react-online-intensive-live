export const navigator = (function*() {
    let route = 0;

    while (true) {
        yield window.history.pushState(
            { meta: `a meta info for a ${route} route` }, // state object
            `A ${route} route title`, // a title, currently ignored
            `/new-address-${(route += 1)}`, // new url
        );
    }
}());
