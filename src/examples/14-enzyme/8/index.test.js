// Core
import { Parent, Child } from './Parent';

const result = shallow(<Parent />);

describe('example-9', () => {
    test('test-1', () => {
        expect(result.find(Child)).toHaveLength(1);
    });
});
