// 신나는 함수 발생
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let readlineIdx = 0;
const readInput = () => input[readlineIdx++];

const fillMax = 0;
const memo = new Array(21);

for(let i = 0; i < 21; ++i){
    memo[i] = new Array(21);
    for(let j = 0; j < 21; ++j){
        memo[i][j] = new Array(21).fill(fillMax);
    }
}

while(true){
    let [a,b,c] = readInput().split(' ').map(Number);    
    if(a === -1 && b === -1 && c === -1) break;
    console.log(`w(${a}, ${b}, ${c}) = ${W(a,b,c)}`);
}


function W(a,b,c){
    if(a<=0 || b<=0 || c<=0){
        return 1
    }
    if(a>20 || b>20 || c>20){
        return W(20,20,20);
    }
    if(memo[a][b][c] !== fillMax){
        return memo[a][b][c];
    }
    if(a<b && b<c){
        let task1 = memo[a][b][c-1] = W(a,b,c-1);
        let task2 = memo[a][b-1][c-1] = W(a, b-1, c-1);
        let task3 = memo[a][b-1][c] = W(a,b-1,c);
        return memo[a][b][c] = task1 + task2 - task3;
    }
    else{
        let task1 = memo[a-1][b][c] = W(a-1,b,c);
        let task2 = memo[a-1][b-1][c] = W(a-1, b-1, c);
        let task3 = memo[a-1][b][c-1] = W(a-1,b,c-1);
        let task4 = memo[a-1][b-1][c-1] = W(a-1,b-1,c-1);
        return memo[a][b][c] = task1 + task2 + task3 - task4;
    }
}
