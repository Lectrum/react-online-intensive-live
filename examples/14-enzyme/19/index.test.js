// Core
import { Parent } from './Parent';

const mocks = {
    fetchDataAsync: jest.fn(),
};

const spies = {
    componentDidMount: jest.spyOn(Parent.prototype, 'componentDidMount'),
};

const id = '123';

const target = (
    <Parent
        fetchDataAsync = { mocks.fetchDataAsync }
        id = { id }
    />
);

shallow(target);

describe('example-19', () => {
    test('test-1', () => {
        expect(spies.componentDidMount).toHaveBeenCalledTimes(1);
        expect(mocks.fetchDataAsync).toHaveBeenNthCalledWith(1, id);
    });
});
