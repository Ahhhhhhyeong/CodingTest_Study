/** N까지 자연수 중 중복 없이 중복 없이 M개를 고른 수열 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);

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