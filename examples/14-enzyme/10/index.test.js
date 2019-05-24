// Core
import { Parent } from './Parent';

const result1 = shallow(<Parent />);
const result2 = mount(<Parent />);

describe('example-10', () => {
    test('shallow render', () => {
        expect(result1).toMatchSnapshot();
    });

    test('full render', () => {
        expect(result2).toMatchSnapshot();
    });
});
