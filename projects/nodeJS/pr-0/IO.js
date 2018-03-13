const stdin = process.stdin;
const stdout = process.stdout;

stdout.write(`как тебя зовут?\n`);
stdin.on("data", input => {
    const name = input.toString().trim();
    const reversedName = name.split("").reverse().join("");
    stdout.write(`имя наоборот - \n${reversedName}`);
    process.exit();
});
process.on("exit", () => stdout.write(`\nпока\n`))

