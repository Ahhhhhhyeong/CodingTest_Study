/** 통계학
 * 산술평균, 중앙값, 최빈값, 범위 구하기
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const countNum = input.shift();
const sortArr = input.sort((a,b) => a - b);

// 최빈값 구하기
const frequentValue = (x) => {
    const numMap = {};
    for(let num of x){
        if(numMap[num]){
            numMap[num] = numMap[num] + 1;
        } else {
            numMap[num] = 1;
        }
    }       
    let frequentNum = Math.max.apply(null, Object.values(numMap));
    let frequentArr =[];
    let frequentResult = 0;
    for(let numKey in numMap){
        if(numMap[numKey] === frequentNum)
            frequentArr.push(numKey);
    }
    frequentArr = frequentArr.sort((a,b) => a - b);  
    frequentResult = frequentArr.length > 1 ? frequentArr[1] : frequentArr[0];
    return frequentResult;
}

console.log(Math.round(input.reduce((a,c) => (a+c),0) / countNum)); // 산술평균
console.log(sortArr[Math.round(countNum / 2) - 1]); // 중앙값
console.log(frequentValue(sortArr)); // 최빈값
console.log(sortArr[sortArr.length - 1] - sortArr[0]); // 범위

