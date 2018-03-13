const buffer = Buffer.from("ТЕстовое строка") //создаётся новый буфер из глоб объекта Buffer с помощью from

const path = require("path");
console.log(path.basename(__filename))//имя файла или директории //__dirname