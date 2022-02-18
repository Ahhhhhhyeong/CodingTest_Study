/**
 * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
 * 단, 대문자와 소문자를 구분하지 않는다.
 */
 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let word =  input[0].toUpperCase().split('');
 const result = {};                     
 word.forEach((x) => result[x] = (result[x] || 0) + 1);

 let maxChar = '';
 let cnt = 0;
 for(prop in result){
    if(prop.match(/[A-Z]/)){
        if(result[prop] > cnt) {
            maxChar = prop;        
            cnt = result[prop];
        }
        else if(result[prop] == cnt) maxChar = '?';
    }          
 } 
 console.log(maxChar);