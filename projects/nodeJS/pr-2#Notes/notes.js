const fs = require("fs");

const comment = process.argv[2];
const title = process.argv[3];
const task = process.argv[4];

switch (comment) {
    case "list":
        list();
        break;

    case "viewOne":
        viewOne();
        break;

    case "add":
        add();
        break;

    case "remove":
        remove();
        break;

    default :
        console.log("undefined command");
}
function list() {
    fs.readFile("notes.json" , (error, data) => {
        if (error) console.error("Error" + "err");

        let notes = JSON.parse(data);
        notes.forEach( (note, index) => console.log(`[] ${index + 1}. ${note.title.slice(0, 1).toUpperCase() + note.title.slice(1)}`));
    })
}