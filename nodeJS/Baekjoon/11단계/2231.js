/** 분해합 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let result = 0;

for(let i = 0; i < input; i++){
    let sum = 0;
    const candidateValue = i;
    const stringValue = candidateValue.toString();
    for(let j = 0; j < stringValue.length; j++){
        sum += parseInt(stringValue[j]);
    }
    sum += candidateValue;
    if(sum == input){
        result =candidateValue;
        break;
    }
}
console.log(result);