// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

describe('example-4', () => {
    test('test-1', () => {
        expect(result.find('section')).toHaveLength(1);
        expect(result.find('h1')).toHaveLength(1);
        expect(result.find('p')).toHaveLength(1);
    });

    test('test-2', () => {
        expect(result.find('h1').text()).toBe('Welcome!');
        expect(result.find('p').text()).toBe('Lorem ipsum dolor sit amet!');
    });
});
