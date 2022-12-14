/**
 * 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
 * 예를 들어, 서로 다른 9개의 자연수
 * 3, 29, 38, 12, 57, 74, 40, 85, 61
 * 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let maxValue = 1;
let temp,num = 0;

// 반복문을 사용하여 최대값 찾기
for(let i = 0; i < 9; i++){
    if(parseInt(input[i]) > maxValue){
        temp = parseInt(input[i]);
        maxValue = temp;
        num = i + 1;
    }
}

console.log(maxValue + '\n' + num);
