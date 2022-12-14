/**
 * A + B - 8
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

 const fs = require("fs");
 const { deflateSync } = require("zlib");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let cnt = Number(input[0]);
 
 for(let i = 1; i <= cnt; i++){
     let A = Number(input[i].split(' ')[0]);
     let B = Number(input[i].split(' ')[1]);
     console.log(`Case #${i}: ${A} + ${B} = ${A+B}`);
 }