/** N-Queen */
const { checkPrime } = require("crypto");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const chess = (N) =>{
    const row = new Array(N).fill(0);
    let cnt = 0;
    dfs(0);

    function dfs(x){
        if(x === N){
           cnt += 1; 
        }else{
            for(let i  = 0; i < N; i++){
                if(row[x]) continue;
                row[x] = i;
                if(isCheck(x)) dfs(x + 1);
                row[x] = 0;
            }
        }
    }

    function isCheck(x){
        for(let i = 0; i < x; i++){
            if(row[x] === row[i]) return false;
            if(Math.abs(row[x] - row[i]) === x - i) return false;
        }
        return true;
    }
    return cnt;
};

console.log(chess(input[0]));
