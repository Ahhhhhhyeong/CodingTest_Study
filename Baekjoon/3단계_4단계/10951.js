/**
 * A+B - 4
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

 const fs = require("fs");
 const { deflateSync } = require("zlib");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let i = 0;

 while(i <= input.length - 1){
     let nums = input[i].split(' ').map(x => Number(x));

     let a = nums[0];
     let b = nums[1];

     console.log(a+b);
     i++;
 }