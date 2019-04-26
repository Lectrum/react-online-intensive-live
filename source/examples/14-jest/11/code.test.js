import { getUid } from './code';
jest.mock('./code.js');

test('«getUid» function should return a number', () => {
    expect(getUid()).toBe(1);
});
