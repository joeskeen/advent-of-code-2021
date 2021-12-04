const fs = require('fs');

const input = fs.readFileSync('puzzle-input.txt').toString();
const readings = input.split(/\r?\n/g).map(line => Number(line));

let previousValue = 0;
let increases = 0;
for(let i = 0; i < readings.length - 3; i++) {
    const sum = readings[i] + readings[i + 1] + readings[i + 2];
    if (sum > previousValue) {
        increases++;
    }
    previousValue = sum;
}

console.log(increases);