const truthy = [ 1, 2, 3 ];
const falsy = '';

test('should return a «truthy» value', () => {
    expect(truthy).toBeTruthy();
});

test('should return a «falsy» value', () => {
    expect(falsy).toBeFalsy();
});
