/** 영화감독 숌 
 * '666'이 포함되면 카운트가 된다.
 * 그러니 666이 나오면 input(N번째의 수)의 값을 줄이면 된다!
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let endNum = 666;
while(input > 1){   
    endNum++;
    if(endNum.toString().includes('666')){
        input--;
    }
}
console.log(endNum);
