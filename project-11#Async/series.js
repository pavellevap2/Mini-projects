
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
let fns = [afn1, afn2, afn3];

function series(fns, resultFn) {
    fns = fns.slice();
    let resultArr =[];

    return fns[0](res => {
            resultArr.push(res);
            return fns.length > 1 ? series(fns.slice(1), resultFn) : fns.length == 1 ? resultFn(resultArr) : null
        })
}

function asyncResultFn(result) {
  console.log(result)
}
series(fns, asyncResultFn)