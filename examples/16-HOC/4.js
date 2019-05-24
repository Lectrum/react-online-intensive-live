// Higher Order Function ↓
const runAll = (...functions) => functions.forEach((func) => func());

const funcs = [
    () => console.log('→ function 1'),
    () => console.log('→ function 2'),
    () => console.log('→ function 3'),
];

runAll(...funcs);
