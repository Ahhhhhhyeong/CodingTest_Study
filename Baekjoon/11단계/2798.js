/** 블랙잭 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number); // N은 카드개수 M은 기준 숫자(3장의 합)
const cards = input[1].split(" ").map(Number);  // 카드에 쓰여진 숫자들 
let result = 0;

for(let i = 0; i < N; i++){
    for(let j = i+1; j < N; j++){
        for(let k = j + 1; k < N; k++){
            let sum = cards[i] + cards[j] + cards[k];
            let gap = Math.abs(M - sum);
            console.log(sum, gap);
            if(gap >= 0 || result <= sum){
                result = sum;
                console.log(result);
            }
        }
    }
}
console.log(result);