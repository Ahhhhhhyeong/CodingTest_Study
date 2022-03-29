/** 좌표 압축 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();

const setArr = input[0].split(' ').map(Number).sort((a,b) => a-b);
const set = new Set(setArr); // 중복제거
const map = new Map();

[...set].forEach((item, index) => { // 좌표 압축값 == index 번호
    map.set(item,index);
}); 

let result = '';
input[0].split(' ').forEach((item, index)=>{ // map의 value 값
    result += map.get(+item) + ' ';
});
console.log(result);