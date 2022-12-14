/**
 * 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
 * 당신은 그들에게 슬픈 진실을 알려줘야 한다.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");


 for(let i = 1; i <= input[0]; i++){
    let avr = 0, percent = 0; 
    for(let j = 1; j < arr[i].length; j++){
       avr += Number(arr[i][j]);          // 각 줄별 전체 합 구하기
    }
    avr = avr / Number(arr[i][0]);        // 각 줄별 평균
    let highScore = 0;
    for(let k = 1; k < arr[i].length; k++){
       if(avr < arr[i][k])
         highScore++;
    }
    percent = (highScore / Number(arr[i][0]) * 100).toFixed(3);
    console.log(percent + '%');
    // 숏코딩 참고함
   // let _split = input[i].split(' ').map(Number);
   // let num = _split.shift();
   // let avg = _split.reduce((x,y) => x+y,0)/num;
   // console.log(String((_split.filter(x=>x>avg).length/num*100).toFixed(3)) + "%");
 }
 