const expectedReturn = 22;
const implementation = () => expectedReturn;

Date.now = jest.fn();
Date.now.mockImplementation(implementation);

describe('«getDate» function:', () => {
    test('should return deterministic value', () => {
        const value = Date.now();

        expect(value).toBe(expectedReturn);
    });

    test('«Date.now» should have been called once', () => {
        expect(Date.now).toHaveBeenCalledTimes(1);
    });

    test('«Date.now» should return deterministic value', () => {
        expect(Date.now).toHaveBeenCalledTimes(1);
        expect(Date.now).toHaveReturnedWith(expectedReturn);
    });
});
