const add = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('An argument should be a number!');
    }

    return a + b;
};

test('«add» function throws given a non-number arguments', () => {
    expect(() => add('1', 2)).toThrow();
    expect(() => add(3, {})).toThrow('An argument should be a number!');
});
