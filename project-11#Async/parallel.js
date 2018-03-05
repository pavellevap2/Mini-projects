let async = require("async");

let stack = [];

let functionOne = (callback) => {
    setTimeout(() =>  callback(null, "first func"),
        2000);
};
let functionTwo = (callback) => {
    setTimeout(() =>  callback(null, "second func"),
        2000);
};
let functionThree = (callback) => {
    setTimeout(() =>  callback(null, "third func"),
        2000);
};

stack.push(functionOne, functionTwo, functionThree);

async.parallel(stack, (err, result) => {
    if (err) {
        console.log("Error :" + err);
    } else {
        console.log(result);
    }

});