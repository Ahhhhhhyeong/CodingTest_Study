/*
두 자연수 A와 B가 주어진다. 
이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 
출력하는 프로그램을 작성하시오.
*/
// ./input.txt 불러올 때
const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ");
let first = parseInt(n);
let second = parseInt(m);

console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(parseInt(first / second));
console.log(first % second);

//결과 : 9720KB, 132ms 


// readline 모듈을 사용 할 때
// const readline = require("readline");
//  const std = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//  });

// std.on('line',(line)=>{
//     input = line.split(' ').map(el => Number(el));
//     console.log(input[0] + input[1]);
//     console.log(input[0] - input[1]);
//     console.log(input[0] * input[1]);
//     console.log(parseInt(input[0] / input[1]));
//     console.log(input[0] % input[1]);
//     std.close();
// }).on('close',()=>process.exit())

//결과 : 9728KB, 152ms