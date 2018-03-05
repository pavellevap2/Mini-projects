let async = require("async");

let firstFunction = (callback) => {
    callback(null, "first func result");
};

let secondFunction = (callback) => {
    callback(null, "second func result");
};

let thirdFunction = (callback) => {
    callback(null, "third func result");
};

async.series([
    firstFunction,
    secondFunction,
    thirdFunction
], (err, res) => {
    console.log(res);
});