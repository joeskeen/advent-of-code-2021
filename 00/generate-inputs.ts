import * as path from 'path';
import * as fs from 'fs';

// 10 input files
for(let i = 0; i < 10; i++) {
    generateFiles(500, i.toString().padStart(2, '0'));
}
generateFiles(10, 'sample');

/////////////////////////////////////////////

function generateFiles(count: number, fileNamePrefix: string) {
    const inputs: number[] = [];
    for(let j = 0; j < count; j++) {
        // Generate a random number between 0 and 10000
        const randomNumber = Math.floor(Math.random() * 10000);
        inputs.push(randomNumber);
    }
    
    let fileContents = inputs.join('\r\n');
    let fileName = `${fileNamePrefix}-input.txt`;
    let filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, fileContents);

    const solution = solve(inputs);
    fileContents = solution.toString();
    fileName = `${fileNamePrefix}-solution.txt`;
    filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, fileContents);
}

/**
 * Subtract the sum of the even numbers from the sum of the odd numbers
 * @param inputs the puzzle input
 */
function solve(inputs: number[]): number {
    const evens = inputs.filter(i => i % 2 === 0);
    const odds = inputs.filter(i => i % 2 === 1);
    const evensSum = evens.reduce((prev, curr) => prev + curr, 0);
    const oddsSum = odds.reduce((prev, curr) => prev + curr, 0);
    return oddsSum - evensSum;
}
