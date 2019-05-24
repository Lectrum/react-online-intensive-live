// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';
const result = shallow(<Parent message = { message } />);

describe('example-6', () => {
    test('test-1', () => {
        expect(result.find('p').text()).toBe(message);
    });
});
