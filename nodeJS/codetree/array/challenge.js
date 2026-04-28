const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('',(answer) => {
  console.log(solution(answer));
  readline.close();
});

function solution(input){
    let answer = 0;
    const arr = input.split(' ');

    arr.forEach(element => {
        answer += Number(element);
    });

    answer = answer / arr.length;

    return answer.toFixed(1);
}