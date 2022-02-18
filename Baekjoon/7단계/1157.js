/**
 * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
 * 단, 대문자와 소문자를 구분하지 않는다.
 */
 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 const word = input.split('').map(x => {
     x = x.toUpperCase();
     let temp = x.charCodeAt(0);
     if(temp >= 65 && temp <= 90) 
        return String.fromCharCode(temp);
 });
 const result = {};                     // {알파벳 : 개수} 객체 생성
 word.forEach((x) => {
     result[x] = (result[x] || 0)+1;
 });


 let maxChar = '';
 for(prop in result){
     let cnt = 1;
     let nowChar =  prop;
     if(result[prop] > cnt){
         maxChar = nowChar;
     }
     else if(result[prop] == cnt){
         maxChar = '?';
     }
 }
 
console.log(maxChar);