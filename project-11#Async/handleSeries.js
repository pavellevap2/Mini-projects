
let rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function afn1(next) {
    setTimeout(() => next("a1"), rand(0, 1000));
}

function afn2(next) {
    setTimeout(() => next("a2"), rand(0, 1000));
}

function afn3(next) {
    setTimeout(() => next("a3"), rand(0, 1000));
}

function done(rs) {
    console.log(...rs);
}

function seriesFn(f1, f2, f3) {
    return f1(res => res, f2(res => res, f3(res => res)))
}
seriesFn(afn1, afn2, afn3)