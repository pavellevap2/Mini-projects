let async = require("async");

let firstFunction = (callback) => {
    callback(null, "one", "two", "three");
};

let secondFunction = (callback) => {
    callback(null, "three", "four", "five");
};

let thirdFunction = (callback) => {
    callback(null, "six, seven, eight");
};

async.series([
    firstFunction,
    secondFunction,
    thirdFunction
], (err, res) => {
    console.log(res);
});