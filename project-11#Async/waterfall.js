function afn1(next) {
    setTimeout(() => next("a1"), 1000);
}

function afn2(next) {
    setTimeout(() => next("a2"), 1000);
}

function afn3(next) {
    setTimeout(() => next("a3"), 1000);
}
function afn4(next) {
    setTimeout(() => next("a4"), 1000);
}

let fns = [afn1, afn2, afn3, afn4];

function waterfall(fns, resultFn) {
    function go() {
        let prevFn = fns.shift();
        let nextFn = fns[0];
        let nextData;

        if (fns.length) {
            nextFn(data => {
                nextData = data
            });
            prevFn(data => {
                data = nextData;
                go()
            })
        } else {
            resultFn("done");
        }
    }
    go()
}

function asyncResultFn(resultArr) {
    console.log(resultArr);
}
waterfall(fns, asyncResultFn)