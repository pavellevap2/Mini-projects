const fs = require("fs");

const dbUrl = "./db/";
const jsonUrl = "./db/test.json";
const txtUrl = "./db/text.txt";
const copiedTextUrl = dbUrl + "copiedText1";
const bigFileUrl = dbUrl + "bigFile1";

function next(result) {
    console.log(result);
}

//чтение файла формата json
function readJson(url, next) {
    fs.readFile(url, (err, result) => {
        if (err) throw err;

        let resultObj = JSON.parse(result);
        next(resultObj);
    });
}
readJson(jsonUrl, next);

//чтение текстового файла и вывод количества слов
function readText(url, next) {
    fs.readFile(url, (err, result) => {
        if (err) throw err;

        let resultStr = result.toString("utf-8");
        let numberOfWords = resultStr.match(/\s+/g).length;
        next(`number of words : ${numberOfWords}`);
    });
}
readText(txtUrl, next);

//копирование файла
function copyFile(url, newUrl, next) {
    let readingResult ;

    fs.readFile(url, (err, res) => {
        if (err) throw err;
        readingResult = res.toString("utf-8");
    });

    fs.writeFile(newUrl, readingResult , (err) => {
        if (err) throw err;

        next(`File created at ${newUrl}`);
    });
}
copyFile(txtUrl, copiedTextUrl, next);

//генерация текстового файла размером 1мб
function makeBigFile(url, next) {
    fs.writeFile(url, "init", (err) => {
            if (err) throw err;
    });

    function generateBigFile() {
        fs.appendFile(url , "some text", err => {
            if (err ) throw  err;

            fs.stat(url , (err, stats) => {
                if (err) throw err;

                if (stats.size <= 1000000) {
                    generateBigFile();
                } else {
                    next("1MB size file created !")
                }
            })
        })
    }
    generateBigFile()
}
makeBigFile(bigFileUrl, next);