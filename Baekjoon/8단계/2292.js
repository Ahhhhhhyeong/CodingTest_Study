/**
 * 벌집 
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("/n");
 let n = 0, s = 0, e = 1;
 while(1){
    let arr = [];
    if(n === 0){
         arr.push(1);
         s = 1; n++;
    }
    if(!arr[0]){
        s = e + 1;
        e = n * 6 + e;
        for(let j = s; j <= e; j++){
            arr.push(j);
        }
        n++;
    } 
    if(arr.includes(Number(input))){
        console.log(n);
        break;
    }   
 }