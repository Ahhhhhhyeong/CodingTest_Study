/** 별 찍기 - 10 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const lines = [];

const printStar = (num) => {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            Starpattern(i, j, num);
        }
        lines.push("\n");
    }
}
function Starpattern(i, j, num){
    if(i % 3 === 1 && j % 3 === 1){ // (1,1), (1,4), (1,7) ...
        lines.push(" ");
    }else{
        if(num === 1) {
            lines.push("*");
        } else{ 
            Starpattern(parseInt(i/3), parseInt(j/3), parseInt(num/3));
        }
    }
}
printStar(input);
console.log(lines.join(""));