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
function afn4(next) {
    setTimeout(() => next("a4"), rand(0, 1000));
}

let fns = [afn1, afn2, afn3, afn4];

function waterfall(fns, resultFn) {
    let newFNS = fns.slice();

    let go = () => {
        let prevData;
        let currData;
        let firstFn = newFNS.shift();

        if (!newFNS.length) {
            resultFn([prevData, "done"]);
        } else {
            firstFn((data) => {
                if (newFNS.length == fns.length){
                    fns[0](firstData => prevData = firstData )
                }

                currData = data;
                data = prevData;
                prevData = currData;
                go()
            })
        }
    };
    go()
}

function asyncResultFn(resultArr) {
    console.log(resultArr);
}
waterfall(fns, asyncResultFn)