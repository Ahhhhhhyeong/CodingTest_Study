/** 설탕 배달 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
let boxkg = parseInt(input[0]);
let cnt = 0; // 총 박스 수

while(true){
    if(boxkg % 5 === 0){
        cnt += boxkg / 5;
        break;
    }
    if(boxkg <= 0){
        cnt = -1;
        break;
    }
    boxkg = boxkg - 3;
    cnt++;
}

console.log(cnt);