/**
 * 벌집 
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("/n");
 let N = 0;
 let sum = 0; 
 let i = 1;
 if( input == 1){
     N = 1;
     console.log(N);
 } else{
    while(true){
        if(6*sum+2 <= Number(input) && Number(input) <= 6*(sum+i)+1){
            N = i + 1;
            console.log(N);
            break;
        }
        if(Number(input) > 6*(sum+i)+1){
            sum = sum + i;
            i++;
            continue;            
        }
    }
 }
