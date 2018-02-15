let {deepStrictEqual: eq} = require("assert");

let addTwo = function () {
    const length = arguments.length;
    if (length === 2) {
        return arguments[0] + arguments[1];
    }else if (length === 1) {
        return (x) => {
            return x += arguments[0];
        };
    }else if (length === 0) {
        return addTwo;
    }
};

eq(addTwo(1, 2), addTwo(1)(2));
eq(addTwo(1)(2), addTwo()()()(1)(2));
eq(addTwo(1, 2), addTwo()()()(1)(2));
eq(addTwo(), addTwo()());

