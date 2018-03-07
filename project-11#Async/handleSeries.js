
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

let nextFn =(err, result) =>{
    if (err){
        return err
    } else {
        return result
    }
}

function seriesFn(fn1, fn2, fn3) {

    return fn1((err, result) => nextFn(err, result),
            fn2((err, result) => nextFn(err, result),
                fn3((err, result) => nextFn(err, result))
            )
    )
}

seriesFn(afn1, afn2, afn3);