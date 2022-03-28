/** 나이순 정렬 
 * Array를 선언하여 각 나이 index마다 가입한 순서대로(입력값 순서대로) push 해주는 방법사용
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const ageArr = [];
input.map(list => {
    let splitArr = list.split(' ');
    let age = Number(splitArr[0]);
    if(ageArr[age] === undefined) ageArr[age] = [];
    ageArr[age].push([age, splitArr[1]]);
});

let result = '';
ageArr.map(list => {
    if(list) {
        for(let i = 0; i < list.length; i++){
            result += `${list[i][0]} ${list[i][1]}\n`;
        }
    }
});

console.log(result);