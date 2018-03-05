let async = require("async");

let firstFunction = (callback) => {
    callback(null, "one", "two", "three");
};

let secondFunction = (arg1, arg2, arg3, callback) => {
    callback(null, "three", "four", "five");
};

let thirdFunction = (arg1, arg2, arg3, callback) => {
    callback(null, "six: done");
};

async.waterfall([
    firstFunction,
    secondFunction,
    thirdFunction
], (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
