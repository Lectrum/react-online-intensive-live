import { Parent } from './Parent';

const result1 = shallow(<Parent />);
const result2 = render(<Parent />);

describe('example-15', () => {
    test('test-1', () => {
        expect(result1.is('section')).toBe(true);
        expect(result1.find('h1').prop('title')).toBe('Greeting message.');
        expect(result1.find('p').prop('className')).toBe('paragraph-main');
    });

    test('test-2', () => {
        expect(result2.is('section')).toBe(true);
        expect(result2.find('h1').attr('title')).toBe('Greeting message.');
        expect(result2.find('p').attr('class')).toBe('paragraph-main');
    });
});
