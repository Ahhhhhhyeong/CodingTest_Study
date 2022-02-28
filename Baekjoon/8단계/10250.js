/** 호텔 방 배정하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n'); 

const leng = parseInt(input[0]);

for(let i = 1; i <= leng; i++){
    let arr = input[i].split(' ');
    let H = parseInt(arr[0]);
    let N = parseInt(arr[2]);
    if(N % H === 0){ //꼭대기층
        floorNum = H;
        roomNum = N / H;
    }else if( N % H !== 0){
        floorNum = N % H;
        roomNum = Math.floor(N / H)+1;
    }
    if(roomNum < 10)
        roomNum = `0${roomNum}`;
    console.log(`${floorNum}${roomNum}`);
}