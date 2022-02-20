/**
 * 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 
 * 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 
 * 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.
 * 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 
 * 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다.
 * 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
 * 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 const arrRead = input[0].split(' ');
 let firstArr = arrRead[0].split('');
 let secondArr = arrRead[1].split('');

 let result = 0;
 let cnt = 1, a = 0, b = 0; 
 for(let i = 0; i < 3; i++){       
    a = a + Number(firstArr[i]) * cnt;
    b = b + Number(secondArr[i]) * cnt;
    cnt = cnt * 10;
    if(i == 2)
        result = a < b ? b : a;
 }
 console.log(result);