/** 터렛
 * 두 원의 접점 구하기
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++){
    let arr = input[i].split(' ').map(Number);
    let d = Math.sqrt((arr[0] - arr[3])**2 + (arr[1] - arr[4])**2); // 두 점 사이의 길이
    
    if(d===0 && arr[2] === arr[5]){ // 똑같은 원이 겹쳐있을 때(무한대)
        console.log(-1);
        continue;
    }

    if(d > arr[2] + arr[5] || d < Math.abs(arr[2] - arr[5])){   // 원이 만나지 않을 때(외부 d>r1+r2 / 내부 d<|r1-r2|)
        console.log(0);
        continue;
    }

    if(d == arr[2] + arr[5] || d == Math.abs(arr[2] - arr[5])){ // 한 점에서 만남(외접 d=r1+r2 / 내접 d=|r1-r2|)
        console.log(1);
        continue;
    }
    
    if(d < arr[2] + arr[5] && d > Math.abs(arr[2] - arr[5])){   // 두 점에서 만남(|r1-r2| < d < r1 + r2)
        console.log(2);
        continue;
    }
}