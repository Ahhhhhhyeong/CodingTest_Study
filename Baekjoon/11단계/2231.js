/** 분해합 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let start = input - (input+"").length*9;
let result = 0;
console.log(start, input);
if(start < 0) start = 0;
for(let i = start; i < input; i++){
    if(i.toString().split('').map(n => parseInt(n)).reduce((acc, n) => acc + n, 0) + i === input){
        result = i;
        break;
    }
}
console.log(result);