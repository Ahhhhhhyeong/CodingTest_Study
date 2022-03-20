/** 분해합 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let constructorArr = [];

const decomposition = (n) => {
    const N = n.toString().split('');
    return n + N.reduce((acc, num) => (acc += parseInt(num)), 0);
}

for(let i = 1; i <= input; i++){
    if(decomposition(i) === input){
        constructorArr.push(i);
    }
}
if(constructorArr.length){
    console.log(Math.min.apply(null, constructorArr));
}else{
    console.log(0);
}