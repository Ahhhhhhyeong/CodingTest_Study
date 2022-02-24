/**
 * 손익분기점 구하기
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split(" ");

 if(Number(input[1]) >= Number(input[2])){
     result = -1;
 } else{
     result = Number(input[0]) / (Number(input[2]) - Number(input[1])) + 1;
 }
 console.log(result);