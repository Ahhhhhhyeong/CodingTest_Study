/** 덩치 */
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(x => x.split(' ').map(x1 => Number(x1)));
let arr = input.slice(1, input.length);
let rank = [];

for(let i = 0; i < arr.length; i++){
    let grade = 1;
    for(let j = 0; j < arr.length; j++){
        if(i != j){
            if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) 
                grade++;
        }
    }
    rank.push(grade);
}
console.log(rank.join(" "));
