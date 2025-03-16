const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    for (let char of line) {
        console.log(char);
    }
    rl.close();
});
