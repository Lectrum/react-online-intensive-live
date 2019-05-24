// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';

const result = shallow(<Parent message = { message } />);

describe('example-12', () => {
    test('test-1', () => {
        // .instance() method returns null for functional components
        expect(result.instance().props.message).toEqual(message);
    });
});
