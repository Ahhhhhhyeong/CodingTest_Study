/**
 * "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. 
 * O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
 * 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
 * 예를 들어, 10번 문제의 점수는 3이 된다.
 * "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
 * OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
 */

 const fs = require("fs");
 const { deflateSync } = require("zlib");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let i = 1; 
 while(1){                                  
    let arr = (input[i] !== undefined) ? input[i].split('') : '';   // 읽어온 값 분리시킴
    let score = 0, point = 0;       // 점수를 계산할 point과 전체점수 합산 score
    for(let j =0; j < arr.length; j++){                             
        point = arr[j] == 'O' ? point + 1 : 0;      // O 일때 point + 1 (if OO : point = 2)
        score += point;
    }
    console.log(score);
    i++;
    if(i > input.length - 1) break;
}