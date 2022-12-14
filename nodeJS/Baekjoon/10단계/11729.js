/** 하노이 탑 */
/** 하노이 탑 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let count = 0;
let result = [];

const hanoi = (n, from, other, to) => {
    if (!n) return;
    
    // from에 있는 원판을 other로 옮긴다.
    // n을 옮기기 위해선 n-1은 다른데로 옮겨
    hanoi(n - 1, from, to, other);
    result.push([from, to]);
    count++;

    // other에서 to로 옮긴다. n - 1을 다시 to로 옮긴다.
    hanoi(n - 1, other, from, to);
}
hanoi(input, 1,2,3);
console.log(count);
console.log(result.map(x => x.join(" ")).join("\n"));
