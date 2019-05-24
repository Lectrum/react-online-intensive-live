// Curry ↓
const greaterThan = (parameter1) => (parameter2) => parameter1 > parameter2; // ← Higher order function

const greaterThan10 = greaterThan(10);
const greaterThan15 = greaterThan(15);

console.log(greaterThan10(11));
console.log(greaterThan15(11));
