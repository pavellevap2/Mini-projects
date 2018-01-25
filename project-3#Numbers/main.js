let {deepStrictEqual: eq} = require("assert");

let double = function(xs) {
    return xs.map(function (item) {
         return [item, item]}).reduce(function (prev, next) {
             return prev.concat(next);
        });
};

console.log(double([11,2,3,4,5])) ;
console.log(double([2,3,41,22,5523,32]));

eq(double([1,2,3,4]), [1,1,2,2,3,3,4,4]);
eq(double([0,1,1,11,1]), [0,0,1,1,1,1,11,11,1,1]);
eq([2,2,4,4,6,6,8,8], double([2,4,6,8]));
eq([-3,-3,5,5,10,10,4,4], double([-3,5,10,Math.pow(2,2)]));