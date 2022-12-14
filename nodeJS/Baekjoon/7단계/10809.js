 /**
  * 알파벳 소문자로만 이루어진 단어 S가 주어진다. 
  * 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 
  * 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
  */
 
 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 const s = input[0].split('').map(x => Number(x.charCodeAt(0)));

 // 아스키코드 97~122 소문자 알파벳
 for(let i = 97; i <= 122; i++){
     let n = -1;
     if(s.find(v => v == i)){
        n = s.findIndex(v => v == i);
        console.log(n);
     }
     else   console.log(n);
 }
