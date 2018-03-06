let async = require("async");

let firstFunction = (callback) => {
    callback(null, "first func asyncResultFn");
};

let secondFunction = (callback) => {
    callback(null, "second func asyncResultFn");
};

let thirdFunction = (callback) => {
    callback(null, "third func asyncResultFn");
};

async.series([
    firstFunction,
    secondFunction,
    thirdFunction
], (err, res) => {
    console.log(res);
});