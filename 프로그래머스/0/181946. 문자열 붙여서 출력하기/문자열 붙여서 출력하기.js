const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ');
    const str1 = input[0];
    const str2 = input[1];
    console.log(str1 + str2);
    rl.close();
});
