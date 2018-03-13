const fs = require("fs");

const dbpath = "./db/";
const jsonFile = "./db/test.json";
const txtFile = "./db/text.txt";
const copiedTextFile = dbpath + "copiedText1.txt";
const bigFile = dbpath + "bigFile1.txt";

function next(result) {
    console.log(result);
}

//чтение файла формата json
function readJson(file, next) {
    fs.readFile(file, (err, result) => {
        if (err) throw err;

        let resultObj = JSON.parse(result);
        next(resultObj);
    });
}
readJson(jsonFile, next);

//чтение текстового файла и вывод количества слов
function readText(file, next) {
    fs.readFile(file, (err, result) => {
        if (err) throw err;

        let resultStr = result.toString("utf-8");
        let numberOfWords = resultStr.match(/\s+/g).length;
        next(`number of words : ${numberOfWords}`);
    });
}
readText(txtFile, next);

//копирование файла
function copyFile(file, newFile, next) {
    fs.readFile(file, "utf-8", (error, result) => {
        if (error) throw error;
        let readingResult = result.toString();

            fs.writeFile(newFile, readingResult , (err) => {
                if (err) {
                    next(err)
                } else {
                    next(null)
                }
            });
    });
}
copyFile(txtFile, copiedTextFile, next);

//генерация текстового файла размером 1мб
function makeBigFile(file, next) {
    fs.writeFile(file, "init", (err) => {
        if (err) throw err;

        function generateBigFile() {
            fs.appendFile(file , "some text", err => {
                if (err ) throw  err;

                fs.stat(file , (err, stats) => {
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
    });
}
makeBigFile(bigFile, next);