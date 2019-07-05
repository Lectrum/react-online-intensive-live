const callFuncs = (...funcs) => funcs.forEach((func) => func());

test('«callFuncs» function should call every function passed as argument one time', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();

    callFuncs(func1, func2);

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
});
