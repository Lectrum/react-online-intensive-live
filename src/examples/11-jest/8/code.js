const add = (a, b) => a + b;

class Person {
    constructor(name) {
        this.name = name;
    }
}

test('«add» function should match its snapshot inline', () => {
    expect(add(2, 3)).toMatchInlineSnapshot();
});

test('«Person» constructor should match its snapshot inline', () => {
    expect(new Person('Jack')).toMatchInlineSnapshot();
});
