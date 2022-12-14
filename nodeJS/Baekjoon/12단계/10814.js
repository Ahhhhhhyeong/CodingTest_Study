/** 나이순 정렬 
 * for loop를 이용해서 index 삽입하여 비교
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const indexArr = [];
const splited = input.map(item => item.split(' '));
for(let i = 0; i < N; i++){
    indexArr.push([parseInt(splited[i][0]), splited[i][1]]);
}

let results = '';
indexArr
.sort((a,b) => a[0] - b[0] || a[2] - b[2])
.forEach(list => (results += `${list[0]} ${list[1]}\n`));

console.log(results);