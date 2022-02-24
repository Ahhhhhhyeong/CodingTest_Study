/**
 * 손익분기점 구하기
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split(" ");
 if(parseInt(input[1]) >= parseInt(input[2])){
     result = -1;
 } else{
     result = Math.floor(parseInt(input[0]) / (parseInt(input[2]) - parseInt(input[1]))) + 1;
 }
 console.log(result);