const fs = require("fs");

const command = process.argv[2];
const note = process.argv[3];
const noteIndex = process.argv[3];

if (command == "list"){
    list((err, notes) => {
        if (err) throw err;
        notes.forEach((note, index) => console.log(`[]${index + 1}. ${note.text.slice(0, 1).toUpperCase() + note.text.slice(1)}`));
    });
} else if (command == "add") {
    add(note, (error) => {
        if (error) throw  error;

        console.log("note created ")
    })
} else if (command == "remove") {
    remove(noteIndex, error => {
        if (error) throw  error;

        console.log("note removed")
    });
} else if (command == "complete"){
    complete(noteIndex, (err, notes) => {
        //пока что не сделал
    })
}
else {
    console.log("undefined command");
}


function list(next) {
    fs.readFile("notes.json" , (error, data) => {
        if (error) next("Error" + error);

        const notes = JSON.parse(data);
        next(null, notes)
    })
}

function add(text, next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        const notes = JSON.parse(data);
        notes.push({ text, "done" : false });
        console.log(text)
        const notesJson = JSON.stringify(notes);

        fs.writeFile("notes.json", notesJson, error =>{
            if (error) next("Error" + error);

            next()
        })
    })
}
function remove(noteIndex , next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        let notes = JSON.parse(data);
        notes.splice(noteIndex - 1, 1);
        const notesJson = JSON.stringify(notes);

        fs.writeFile("notes.json", notesJson, error =>{
            if (error) next("Error" + error);

            next()
        })
    })
}
function complete(noteIndex, next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        let notes = JSON.parse(data);
        notes = notes.map( (x, i) => {
            if (i == noteIndex){
                x.done = true
            }
        })
    })

    }