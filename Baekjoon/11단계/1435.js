/** 영화감독 숌 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let endNum = 666;
let temp = endNum
for(let i = 2; i <= input; i++){
    temp += 1000;
    let arr = checkNum(endNum, temp);
    endNum = Math.min(...arr);
}

function checkNum(x, y){
    let arr = [];
    for(let i = x+1; i <= y; i++){
        let top = i.toString().split('');
        for(let j = 0; j < top.length; j++){
            if(top[j] == '6' && top[j] == top[j+1] && top[j+1] == top[j+2]){
                arr.push(i);
            }
        }
    }
    return arr;
}

console.log(endNum);
