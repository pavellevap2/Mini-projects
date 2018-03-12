// Array.prototype.flatten = function () {
//     return this.reduce( (z, x) => z.concat(x), [])
// }
//
//     [[1], [2]].flatten() // [ 1, 2 ]
//
// Array.prototype.flatMap = function (fn) {
//     return this.map(fn).flatten()
// }
//
//     [1].flatMap(x => [x, x]) // [ 1, 1 ]
//     [1, 2, 3].flatMap(x => [x, x]) // [ 1, 1, 2, 2, 3, 3 ]
// let filter = (filterFn,xs) => {
//     return reduce(
//          (z,x)=> {
//            if( filterFn(x)   ) {
//               return z.concat([x])
//            }else {
//              return z ;
//            }}, [], xs)
// };
let xs = [0, 1, 2, 3, 4, 5];
// filterFn :: a -> Boolean
// допустим :
let filterFn = (x) => x >0;
let reduceFn = (z ,x) => z + x;
let z = 0;
z = reduceFn(z, xs[0]);
z = reduceFn(z, xs[1]);
z = reduceFn(z, xs[2]);
z = reduceFn(z , xs[3]);
z = reduceFn(z , xs[4]);
let ys =[
    ...(filterFn(xs[0]) ? [xs[0]] : []),
    ...(filterFn(xs[1]) ? [xs[1]] : []),
    ...(filterFn(xs[2]) ? [xs[2]] : []),
]
console.log(ys)
та
