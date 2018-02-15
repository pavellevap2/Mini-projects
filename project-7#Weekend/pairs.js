let range = (n) => Array(n).fill(null).map((_, i) => i);


Array.prototype.flatten = function () {
    return this.reduce((z, x) => z.concat(x), []);
};

Array.prototype.flatMap = function (fn) {
    return this.map(fn).flatten();
};

let permutationPairs = (n) => {
    return range(n).flatMap(x => {
        return range(n).map(y => {
            return [x, y]  ;
        })
    })
};
let rangeComb = (m, n) => Array(n - m).fill(null).map((_, i) => m + i) ;

let combinationPairs = (n)=> {
    return range(n).flatMap(x => {
        return rangeComb(x, n).map( y =>{
            return [x, y]
        } )
    })
};
