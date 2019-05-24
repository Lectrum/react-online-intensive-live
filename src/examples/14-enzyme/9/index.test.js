// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

describe('example-8', () => {
    test('test-1', () => {
        expect(result).toMatchSnapshot();
    });
});
