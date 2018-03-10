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

function handleWaterfall (fn1, fn2, fn3, fn4, resultFn) {
    fn1(data1 => {
        let currData1 = data1;

        fn2(data2 => {
            let currData2 = data2;
            data2 = currData1 ;


            fn3(data3 => {
                    let currData3 = data3;
                    data3 = currData2;

                    fn4(data4 => {
                        data4 = currData3;
                        if (data4 == "a3" && data3 == "a2" && data2 == "a1"){
                             resultFn ("done") ;
                        }
                    })
            })
        })
    })
}
function asyncResultFn(resultArr) {
    console.log(resultArr);
}

handleWaterfall(afn1, afn2, afn3, afn4 ,asyncResultFn);
