// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

describe('example-3', () => {
    test('test-1', () => {
        expect(result.children()).toHaveLength(2);
    });
});
