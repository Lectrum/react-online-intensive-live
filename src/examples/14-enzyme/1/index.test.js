// Core
import React from 'react';
import { Parent } from './Parent';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const result = shallow(<Parent />);

const expected = '<section><h1>Welcome!</h1><p>Lorem ipsum dolor sit amet!</p></section>';

describe('example-1', () => {
    test('test-1', () => {
        expect(result.html()).toBe(expected);
    });
});
