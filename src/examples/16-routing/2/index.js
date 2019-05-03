// Instruments
import { navigator } from './navigator';

window.addEventListener('popstate', (state) => console.log(state));

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');

button1.innerText = '←';
button2.innerText = 'Push an address';
button3.innerText = 'Replace current address';
button4.innerText = '→';

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

button1.addEventListener('click', () => window.history.back());
button2.addEventListener('click', () => navigator.next());
button3.addEventListener('click', () => window.location.replace('/replaced-url'));
button4.addEventListener('click', () => window.history.forward());
