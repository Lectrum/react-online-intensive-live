const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('resolved!'), duration);
    });
};

test('old: «delay» function should return a promise', () => {
    return expect(delay()).resolves.toBe('resolved!');
});

test('new: «delay» function should return a promise', async () => {
    await expect(delay()).resolves.toBe('resolved!');
});
