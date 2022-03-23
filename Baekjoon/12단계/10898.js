/** 수 정렬3
 * 시간 및 메모리 제한 있음
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let arr = Array.apply(null, Array(10001)).map(()=>0);
let skip = 1;
for(let i of input){
    if(skip){
        skip = 0;
        continue;
    }
    arr[parseInt(i)]++;
}
for(let i = 0; i < arr.length; i++) 
    while(arr[i]--)
        console.log(i);