
let rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
    setTimeout(() => next(null, "a1"), rand(0, 1000));
}

function afn2(next) {
    setTimeout(() => next(null, "a2"), rand(0, 1000));
}

function afn3(next) {
    setTimeout(() => next(null, "a3"), rand(0, 1000));
}
let fns = [afn1, afn2, afn3];
function series(fns, resultFn) {
    fns = fns.slice();
    conslefns.shift()
}
function asyncResultFn(resultArr) {
    console.log(resultArr);
}
series(fns, asyncResultFn)