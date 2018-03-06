let asyncFn1 = (callback) => {
    setTimeout(() =>  callback("first func"),
        3000);
};
let asyncFn2 = (callback) => {
   setTimeout(() => callback("second func"),
        1000);
};
let asyncFn3 = (callback) => {
    setTimeout(() => callback("third func"),
        1500);
};


function parallel(fns, callback) {
    fns.forEach((fn, i, arr) => {
        fn(res =>{

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

