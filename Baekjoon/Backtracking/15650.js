/** N과 M */
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const arr = [];
let result = '';
const output = [];

const dfs = (idx, cnt) => { 
    if(cnt === M){
        result += `${output.join(' ')}\n`;
        return;
    }

    for(let i = idx; i < N; i++){
        if(arr[i] === true) continue;
        arr[i] = true;
        output.push(i + 1);
        dfs(i, cnt + 1); // 지난 숫자를 제외하고 loop 돌림
        output.pop();
        arr[i] = false;
    }
}
dfs(0, 0);
console.log(result.trim());