/** 부녀회장 정하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift();

for(let i = 0; i < T; i++){
    const a = parseInt(input.shift());      // 층 수
    const b = parseInt(input.shift());      // 룸 넘버
    const apt = [];
    for(let j = 0; j <= a; j++){        // 2차원 배열을 만듦
        apt.push([1]);
        for(let k = 1; k <= b; k++){    
            if(j === 0){                // 0층 k룸 = k명
                apt[j].push(k);
            } else{
                if(k === 1) apt[j].push(1);     // 1번룸 = 1명 
                else apt[j].push(apt[j-1][k] + apt[j][k-1]);    // j층 k번룸 = (j-1층 k번룸인원 + j층 k-1번룸인원)
            }
        }
    }
    console.log(apt[a][b]);
}


