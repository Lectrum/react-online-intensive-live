// Curry ↓
const multiply = (parameter1, parameter2) => parameter1 * parameter2;

const doublify = multiply.bind(null, 2);
const triplify = multiply.bind(null, 3);

console.log(doublify(11));
console.log(triplify(11));
