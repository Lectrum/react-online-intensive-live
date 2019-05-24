// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';

const result = mount(<Parent message = { message } />);

describe('example-13', () => {
    test('test-1', () => {
        expect(result.prop('message')).toBe(message);
    });

    test('test-2', () => {
        expect(result.props()).toEqual({ message });
    });
});
