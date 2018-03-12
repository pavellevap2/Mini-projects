let fs = require("fs");


function readJson() {
    fs.readFile("./db/test.json", function (err, result) {
        if (err) throw err;

        let resultObj = JSON.parse(result);
        console.log(resultObj);
    });
}
readJson();

function readText() {
    fs.readFile("./db/big.txt", function (err, result) {
        if (err) throw err;

        let resultStr = result.toString("utf-8");
        let numberOfWords = resultStr.match(/\s+/g).length;
        console.log(numberOfWords);

    });
}
readText();

function copyFile() {
    fs.readFile("./db/bigger.txt", function (err, res) {
        if (err) throw err;

        let resultStr = res.toString("utf-8");
        fs.copyFile("./db/bigger.txt", "./db/copyBigger.txt", (err) => {
            if (err) throw err;
            console.log('bigger.txt was copied to copyBigger.txt"');
        })

    });
}
copyFile()