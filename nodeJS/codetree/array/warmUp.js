const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('',(answer) => {
  console.log(solution(answer));
  readline.close();
});

function solution(input){    
    const arr = input.split(' ');
    let answer = 0;
    for (const num in arr) {
        if (!Object.hasOwn(arr, num)) continue;
        answer += Number(arr[num]);
    }
    return answer;
}