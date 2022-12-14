/**
 * N개의 정수가 주어진다. 
 * 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let arr = input[1].split(' ').map( x => Number(x));
 const maxValue = Math.max.apply(null, arr);
 const minValue = Math.min.apply(null, arr);

 console.log(minValue, maxValue);
