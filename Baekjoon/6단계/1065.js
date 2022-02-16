/**
 * 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
 * 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
 * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
 */

 const { count } = require("console");
 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 const ap = input[0].split('').map( x => Number(x)); // 수열
 let cnt = 0;   // 한수 개수
 
 for(let i = 1; i <= parseInt(input[0]); i++){
     let arr = String(i);     
     if(i < 100){
        cnt++;
        continue;
     } 
     let A = Number(arr[0]) - Number(arr[1]);
     let B = Number(arr[1]) - Number(arr[2]);
     if(A === B){
        cnt++;
     }
}
console.log(cnt);
 
 
 
 
 