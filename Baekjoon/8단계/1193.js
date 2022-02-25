/** 분수찾기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().split("/n")); 
let line = 0, cnt = 0;
let a = 1, b = 1;

while(cnt <= input){
    line += 1;
    cnt += line;
}
cnt -= line;
if(line % 2 == 0){
    a = input - cnt;
    b = line - a + 1;
}else{
    a = line - (input - cnt) + 1;
    b = input - cnt;
}
console.log(a + '/' + b);