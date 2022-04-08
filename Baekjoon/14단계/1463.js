/** 1로 만들기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let min_cnt = [];
let memo = [...Array(input + 1)];
memo[1] = 0;

for(let i = 2; i <= input; i++){
  calNumber = [i - 1];
  if(i % 2 === 0 ){
    calNumber.push(i / 2);
  }
  if(i % 3 === 0){
    calNumber.push(i / 3);
  }

  memo[i] = Math.min(...calNumber.map((x) => memo[x])) + 1;
}
console.log(memo[input]);