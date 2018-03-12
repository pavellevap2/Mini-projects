let {deepStrictEqual: eq} = require("assert");

function isCorrectly(xs) {
    let zs = xs.map((number, i) => {
        let n = number * 2;
        if (i % 2 === 0) {
            return (n > 9) ? (n - 9) : n;
        } else {
            return number;
        }
    });
    return zs.reduce( (prev ,next) => {
        return prev + next;
    }, 0) % 10 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 9];
let numbers2 = [4, 5, 6, 1, 2, 6, 1, 2, 1, 2, 3, 4, 5, 4, 6, 4, 7];

eq(isCorrectly(numbers), true);
eq(isCorrectly(numbers2), false);
