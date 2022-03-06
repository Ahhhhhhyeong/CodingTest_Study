/** 직각삼각형 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\r\n');

// for(let i = 0; i < input.length-1; i++){
//     let arr = input[i].split(' ').map(Number);
//     arr = arr.sort(function(a, b){ return b - a });
//     console.log((arr[1]*arr[1])+(arr[2]*arr[2]) === (arr[0]*arr[0]) ? "right" : "wrong");
// }
let i = 0;
while(1){
    let arr = input[i].split(' ').map(Number);
    if(arr[0] === 0 && arr[1] === 0 && arr[2] === 0) break;

    arr = arr.sort(function(a, b) { return b - a });
    console.log((arr[1]*arr[1])+(arr[2]*arr[2]) === (arr[0]*arr[0]) ? "right" : "wrong");
    i++;
}