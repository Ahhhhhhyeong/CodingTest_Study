/** 단어 정렬
 * 길이가 짧은 것 부터 (길이가 같을 시 사전 순으로)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let set = new Set(input.slice(1));
let newArr = [...set];
newArr.sort();

newArr.sort((a,b) => {
    if(a.length > b.length)
        return 1;
    if(a.length == b.length)
        return 0;
    else return -1;
});
console.log(newArr.join('\n'));