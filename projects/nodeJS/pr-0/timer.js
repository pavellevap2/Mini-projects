const waitTimeOut = 3000;
const waitInterval = 1000;
let currentTime = 0;
let percent = 0;

process.stdout.write(".....Загрузка");

setInterval(() => {
    currentTime += waitInterval;
    percent = Math.floor(currentTime / waitTimeOut * 100)
    process.stdout.write(`\n${percent.toString()} % `)
}, waitInterval );

setTimeout( () => {
    process.stdout.write(`\nГотово\n`);
    process.exit();
}, waitTimeOut);