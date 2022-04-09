// 신나는 함수 발생
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

const memo = {};

for(let i = 0; i < 20; i++){
    memo[i] = [];
    for(let j = 0; j < 20; j++){
        memo[i][j] = [];
        for(let k = 0; k < 20; k++){
            memo[i][j][k] = null;
        }
    }
    let arr = input[i].split(' ').map(Number);
    console.log(`w(${arr[0]}, ${arr[1]}, ${arr[2]}) = ${W(arr[0], arr[1], arr[2])}`);
}



function W(a,b,c){
    if(a<=0 || b<=0 || c<=0){
        return 1
    }
    if(a>20 || b>20 || c>20){
        return W(20,20,20);
    }
    if(memo[a][b][c]){
        return memo[a][b][c];
    }
    if(a<b && b<c){
        memo[a][b][c] = W(a, b, c-1) + W(a, b-1, c-1) - W(a, b-1, c);
    }
    else{
        memo[a][b][c] = 
                W(a-1, b, c) + W(a-1, b-1, c) + W(a-1, b, c-1) - W(a-1, b-1, c-1)
    }
    return memo[a][b][c];
}
