/*
 * 시험 점수를 입력받아 90 ~ 100점은 A, 
80 ~ 89점은 B, 
70 ~ 79점은 C, 
60 ~ 69점은 D, 
나머지 점수는 F를 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const score = parseInt(input[0]);

if(score < 60)
    console.log("F");
else if(score >= 60 && score < 70)
    console.log("D");
else if(score >= 70 && score < 80)
    console.log("C");
else if(score >= 80 && score < 90)
    console.log("B");
else if(score >= 90 && score <= 100)
    console.log("A");

