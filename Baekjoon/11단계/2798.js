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
            if(cards[i]+cards[j]+cards[k] <= M && cards[i]+cards[j]+cards[k] > result) {
                result = cards[i]+cards[j]+cards[k];
            }
        }
    }
}
console.log(result);