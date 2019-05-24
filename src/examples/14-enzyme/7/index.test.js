// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';
const newMessage = 'The weather is fine!';

const result = shallow(<Parent message = { message } />);

describe('example-7', () => {
    test('test-1', () => {
        expect(result.find('p').text()).toBe(message);

        result.setProps({
            message: newMessage,
        });

        expect(result.find('p').text()).toBe(newMessage);
    });
});
