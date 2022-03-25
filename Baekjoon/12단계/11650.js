/** 좌표 정렬하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const cntNum = input.shift();
const cordArr = input.map(cord => cord.split(' ').map(Number));
let results = ''; 
cordArr.sort((a, b) => {
    if(a[0] !== b[0]){
        return a[0] - b[0];
    }
    return a[1] - b[1];
}).forEach(cord => {    
    results += `${cord[0]} ${cord[1]}\n`;
});
console.log(results);