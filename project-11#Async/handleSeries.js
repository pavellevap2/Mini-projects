
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

function seriesFn(fn1, fn2, fn3 , resultFn) {
    fn1((err, data1) => { if (err) throw err;
      fn2((err, data2) => { if (err) throw err;
        fn3((err, data3) => { if (err) throw err;
            return resultFn([data1, data2, data3])
        })
      })
    })
}

function asyncResultFn(resultArr) {
    console.log(resultArr);
}

seriesFn(afn1, afn2, afn3, asyncResultFn);