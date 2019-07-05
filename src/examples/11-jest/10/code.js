global.Date = jest.fn();

class User {
    created = new Date();

    constructor(name) {
        this.name = name;
    }
}

test('«User» constructor should match its snapshot inline', () => {
    expect(new User('Jack')).toMatchSnapshot();
    expect(Date).toHaveBeenCalledTimes(1);
});
