/** N과 M */
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let arr = [];
let result = '';
let output = [];

const dfs = (cnt) => {
    if(cnt === M){
        result += `${output.join(' ')}\n`;
        return;
    }

    for(let i = 0; i < N; i++){
        if(arr[i] === true) continue;
        arr[i] = true;
        output.push(i + 1);
        dfs(cnt + 1);
        output.pop();
        arr[i] = false;
    }
}
dfs(0);
console.log(result.trim());