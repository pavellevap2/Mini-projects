
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
    let resultArr = [];

   function go(){
        if (!fns.length) {
          resultFn(resultArr);
        } else if (fns.length > 0) {
            let firstFn = fns.shift();

             firstFn(res => {
               resultArr.push(res);
               go()
           })
        }
    }
    go()
}


function asyncResultFn(result) {
  console.log(result)
}
series(fns, asyncResultFn);