/**
 * A+B - 5
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * Whlie 문 사용
 */

 const fs = require("fs");
 const { deflateSync } = require("zlib");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let i = 0;

 while(true){
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    if(a==0 && b==0)
        break;
    
    console.log(`${a+b}`);
    i++;
 }