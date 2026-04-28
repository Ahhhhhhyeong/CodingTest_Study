const readline = require('readline');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout 
});
const input = [];
rl.on("line", function(line){
    input.push(line);
    if(input.length === 2){
        rl.close();
    }
}).on("close", function () {
    console.log(solution(input));
    process.exit();
})


function solution(input) {
    let answer = [];
    const leng = input[0];
    const arr = input[1].split(' ');
    for(let i=leng-1; i >= 0; i--){
        const tmp = Number(arr[i]);
        if(tmp % 2 === 0) answer.push(tmp);
    }

    return answer.join(' ');
}