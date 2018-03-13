const fs = require("fs");

const command = process.argv[2];
const note = process.argv[3];
const noteIndex = process.argv[3];

if (command == "list" || !command){
    list((error, notes) => {
        if (error) throw error;

        notes.forEach((note, index) => {
            console.log(`${note.done ? "[x]" : "[]"}${index + 1}. ${note.text.slice(0, 1).toUpperCase() + note.text.slice(1)}`)
        })
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
} else if (command == "done"){
    done(noteIndex, (error) => {
        if (error) throw error;

        console.log("task completed")
    })
} else if (command == "undone") {
    undone(noteIndex, (error) => {
        if (error) throw error;

        console.log("task uncompleted");
    })
}
else {
    console.log("undefined command");
}

//выводится список заметок/заданий
function list(next) {
    fs.readFile("notes.json" , (error, data) => {
        if (error) next("Error" + error);

        const notes = JSON.parse(data);
        next(null, notes)
    })
}

//добавить заметку
function add(text, next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        const notes = JSON.parse(data);
        notes.push({ text, "done" : false });
        const notesJson = JSON.stringify(notes);

        fs.writeFile("notes.json", notesJson, error =>{
            if (error) next("Error" + error);

            next()
        })
    })
}

//удалить заметку
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

//пометить заметку,как выполненную
function done(noteIndex, next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        let notes = JSON.parse(data);
        notes = notes.map((x, i)=>{
            if (i == noteIndex - 1) {
                x.done = true;
                return x;
            } else {
                return x;
            }
        });
        const notesJson = JSON.stringify(notes);

        fs.writeFile("notes.json", notesJson, (error) =>{
            if (error) next("Error" + error);

            next()
        })
    })
}

//убрать метку выполненности с заметки
function undone(noteIndex, next) {
    fs.readFile("notes.json", (error, data) => {
        if (error) throw  error;

        let notes = JSON.parse(data);
        notes = notes.map((x, i)=>{
            if (i == noteIndex - 1) {
                x.done = false;
                return x;
            } else {
                return x;
            }
        });
        const notesJson = JSON.stringify(notes);

        fs.writeFile("notes.json", notesJson, (error) =>{
            if (error) next("Error" + error);

            next()
        })
    })

}