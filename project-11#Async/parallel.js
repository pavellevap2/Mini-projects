let asyncFn1 = (callback) => {
    setTimeout(() =>  callback("first func result"),
        3000);
};
let asyncFn2 = (callback) => {
   setTimeout(() => callback("second func result"),
        1000);
};
let asyncFn3 = (callback) => {
    setTimeout(() => callback("third func result"),
        4500);
};


function parallel(fns, callback) {
    let resultArr = [];

    fns.forEach(fn => {
        fn(res =>{
            resultArr.push(res);
            if(resultArr.length == fns.length){
                callback(resultArr)
            }
        })
    })
}

let asyncResultFn = ( result) => {
    console.log(result)
};
parallel([
        asyncFn1,
        asyncFn2,
        asyncFn3
    ], asyncResultFn
);

