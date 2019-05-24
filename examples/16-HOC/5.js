const unless = (condition, then) => {
    if (!condition) {
        then();
    }
};

const repeat = (times, action) => {
    for (let i = 0; i < times; i++) {
        action(i);
    }
};

repeat(3, (parameter) => {
    unless(parameter % 2, () => {
        console.log(parameter, 'is even');
    });
});
