
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


function seriesFn(fn1, fn2, fn3) {
    return fn1(res => res,
            fn2(res => res,
                fn3(res => res)
            )
    )
}
seriesFn(afn1, afn2, afn3)