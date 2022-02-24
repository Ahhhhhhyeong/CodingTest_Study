/**
 * 손익분기점 구하기
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split(" ");

 let A = Number(input[0]);
 let B = Number(input[1]);
 let C = Number(input[2]);
 let cnt = 0, money = 0;
 let income = C - B;

 while(1){
    if( income === -1 ) {
        console.log(-1);
        break;
    }
    
    if(A >= money){
        money += income;
        cnt++;
        continue;
    }
    
    if(A < money){
        console.log(cnt);
        break;
    }
 }