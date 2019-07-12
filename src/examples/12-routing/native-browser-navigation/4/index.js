// Instruments
import { navigator, history } from './navigator';

const unlisten = history.listen((location, action) => {
    const { pathname, search, hash } = location;

    console.log(`Navigation action → ${action}`);
    console.log(`The current URL   → ${pathname}${search}${hash}`);
    console.log('Navigation state  → ', location.state);
});

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
const button5 = document.createElement('button');

button1.innerText = '←';
button2.innerText = 'Push a address';
button3.innerText = 'Stop to listen location change';
button4.innerText = 'Replace current address';
button5.innerText = '→';

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
document.body.appendChild(button5);

button1.addEventListener('click', () => history.go(-1)); // or history.goBack()
button2.addEventListener('click', () => navigator.next());
button3.addEventListener('click', () => unlisten());
button4.addEventListener('click', () => history.replace({
    pathname: '/home',
    search:   '?type=replaced',
    state:    { meta: 'meta info', method: 'replace' },
}));
button5.addEventListener('click', () => history.goForward());

// const unblock = history.block('Are you sure you want to leave this page?');
// unblock();
