/** #15 이런 문제는 싫어*/


function solution(arr)
{
    let answer = [];
    const queue = [-1];

    for(let i = 0; i < arr.length; i++) {
        const n = queue.pop();
        if(n === arr[i]){
            queue.push(n);
        } else {
            answer.push(arr[i]);
            queue.push(arr[i]);
        }
    }

    return answer;
}


// ===== 입출력 =====
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    rl.close(); // 한 줄 입력 후 종료
}).on('close', () => {
    // 입력 받은 input을 arr로 변환
    const arr = input[0].split(' ').map(Number);
    console.log(solution(arr));
});
