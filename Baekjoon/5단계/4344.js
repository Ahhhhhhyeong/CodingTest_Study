/**
 * 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
 * 당신은 그들에게 슬픈 진실을 알려줘야 한다.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");
 let arr = input.map((e) => {
   return e.split(' ');
 }); 

 for(let i = 1; i < input.length; i++){
    let avr = 0, percent = 0; 
    for(let j = 1; j < arr[i].length; j++){
       avr += Number(arr[i][j]);          // 각 줄별 전체 합 구하기
    }
    avr = avr / Number(arr[i][0]);        // 각 줄별 평균
    
   //  for(let k = 1; k < arr[i].length; k++){
       
   //  }
   
    console.log(avr.toFixed(3));
 }
 