const MULTIPLIER = 100;
const getRandomNumber = (range = MULTIPLIER) => Math.floor(Math.random() * range);
const set = new Set();

/* Выполнится перед каждым тестом */
beforeEach(() => {
    // console.log('→ set.size', set.size);
});

describe('«getRandomNumber» function:', () => {
    [ ...Array(MULTIPLIER).keys() ].forEach(() => {
        test(`should return number less than ${MULTIPLIER}`, () => {
            const randomNumber = getRandomNumber();
            set.add(randomNumber);

            expect(set.size).toBeLessThan(MULTIPLIER);
        });
    });
});
