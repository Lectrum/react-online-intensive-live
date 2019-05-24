test('example-20', () => {
    expect(document.getElementById('spinner')).not.toBeNull();
});

// setupEnzymeEnvironment.js
// ↓
// const { JSDOM } = require('jsdom');
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;

// global.window = window;
// global.document = window.document;

// const spinner = document.createElement('div');
// spinner.setAttribute('id', 'spinner');
// document.body.appendChild(spinner);
