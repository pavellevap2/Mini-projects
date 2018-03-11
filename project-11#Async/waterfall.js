function afn1(next) {
    setTimeout(() => next("a1"), 1000);
}

function afn2(next) {
    setTimeout(() => next("a2"), 1000);
}

function afn3(next) {
    setTimeout(() => next("a3"), 1000);
}
function lastFn(next) {
    setTimeout(() => next(null), 1000);
}

let fns = [afn1, afn2, afn3, lastFn];

function waterfall(fns, resultFn) {
    function go(){
        if (fns.length == 1) {
            resultFn("done");
        } else if (fns.length > 1) {
            let firstFn = fns.shift();
            let nextFn = fns[0];
            let prevRes;

            firstFn(prevData => {
                prevRes = prevData;
                nextFn(nextData => {
                   nextData = prevRes;
                   go()
                })
            })
        } else {
            return 0
        }
    }
    go()
}

function asyncResultFn(result) {
    console.log(result);
}
waterfall(fns, asyncResultFn);