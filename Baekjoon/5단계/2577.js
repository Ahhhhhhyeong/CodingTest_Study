/**
 * 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
 * 예를 들어 A = 150, B = 266, C = 427 이라면 
 * A × B × C = 150 × 266 × 427 = 17037300 이 되고, 
 * 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");
 
 let value = Number(input[0]) * Number(input[1]) * Number(input[2]);
 // 숫자를 do..while문을 이용하여 배열 nums로 만듦
 let nums = [];
 do{
    nums.push(value % 10);
    value = Math.floor(value / 10);
 }while(value > 0)

// let cnt = 0;
 for(let i = 0; i < 10; i++){
    let cnt = 0;
     for(let j = 0; j < 10; j++){
        if(i == nums[j]){
            cnt++;
        }
     }
     console.log(cnt);
 }


 
