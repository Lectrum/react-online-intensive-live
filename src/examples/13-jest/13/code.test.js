const callFuncsExceptFirst = (...funcs) => funcs.forEach((func, index) => index !== 0 && func());

describe('«callFuncsExceptFirst» function:', () => {
    const func1 = jest.fn();
    const func2 = jest.fn();
    callFuncsExceptFirst(func1, func2);

    test('should not call first-argument function', () => {
        expect(func1).not.toHaveBeenCalled();
    });

    test('should call every function passed as argument one time', () => {
        expect(func1).toHaveBeenCalledTimes(0);
        expect(func2).toHaveBeenCalledTimes(1);
    });
});
