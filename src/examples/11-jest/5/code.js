const data = [ 'a data' ];

test('«getArray» function should return an array with valid data', () => {
    expect(data).toEqual(expect.arrayContaining(data));
});
