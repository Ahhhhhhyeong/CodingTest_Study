/** 부녀회장 정하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift();

for(let i = 0; i < T; i++){
    const a = parseInt(input.shift());      // 층 수
    const b = parseInt(input.shift());      // 룸 넘버
    ResidentNum(a,b);
}

function ResidentNum(floor, room){
    const apt = [];
    for(let j = 0; j <= floor; j++){        // 2차원 배열을 만듦
        apt.push([1]);
        for(let k = 1; k <= room; k++){    
            if(j === 0){                // 0층 k룸 = k명
               apt[j].push(k);
               continue;
            }
            apt[j].push(k===1 ? 1 : apt[j-1][k] + apt[j][k-1]);            
        }
    }
    console.log(apt[floor][room]);
}


