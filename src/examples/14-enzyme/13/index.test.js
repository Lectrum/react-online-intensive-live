// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';

const result = shallow(<Parent message = { message } />);

describe('example-14', () => {
    test('test-1', () => {
        expect(result.state()).toEqual({
            visible: false,
        });
        expect(result).toMatchSnapshot();
    });

    test('test-2', () => {
        result.setState({
            visible: true,
        });
        expect(result).toMatchSnapshot();
    });
});
