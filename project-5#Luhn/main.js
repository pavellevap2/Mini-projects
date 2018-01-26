let {deepStrictEqual: eq} = require("assert");

function isCorrectly(xs) {
    xs.map( (number, i) => {
        if( i % 2 === 0 ) {
           return ( number * 2 > 9 ) ? (number * 2 - 9) : (number * 2);
        }else  {
            return number;
        }
    });
   return xs.reduce( (prev ,next) => {
        return prev+next;
    }, 0) % 10 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 9];
let numbers2 = [4, 5, 6, 1, 2, 6, 1, 2, 1, 2, 3, 4, 5, 4, 6, 4, 7];

eq(isCorrectly(numbers), true);
eq(isCorrectly(numbers2), false);
