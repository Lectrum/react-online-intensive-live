// Core
import { Parent } from './Parent';

const mocks = {
    loginAsync:     jest.fn(),
    preventDefault: jest.fn(),
};

//               ↓ hack
const result = mount(<Parent loginAsync = { mocks.loginAsync } />);

const spies = {
    _updateName: jest.spyOn(result.instance(), '_updateName'),
    _submit:     jest.spyOn(result.instance(), '_submit'),
};

const name = '';
const initialState = { name };
const updatedName = 'Madonna';
const updatedState = {
    name: updatedName,
};

describe('example-18', () => {
    result.instance().forceUpdate(); // ← hack

    test('test-1', () => {
        expect(result.state()).toEqual(initialState);
        expect(result.find('h1').text()).toBe(`Welcome, ${name}!`);
    });

    test('test-2', () => {
        result.find('input[type="text"]').simulate('change', {
            target: {
                value: updatedName,
            },
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('h1').text()).toBe(`Welcome, ${updatedName}!`);
        expect(spies._updateName).toHaveBeenCalledTimes(1);
    });

    test('test-3', () => {
        result.find('input[type="submit"]').simulate('submit', {
            preventDefault: mocks.preventDefault,
        });
        expect(spies._submit).toHaveBeenCalledTimes(1);
        expect(mocks.preventDefault).toHaveBeenCalledTimes(1);
        expect(mocks.loginAsync).toHaveBeenNthCalledWith(1, updatedName);
        expect(result.state()).toEqual(initialState);
    });
});
