/** 피보나치 수 5 */
 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
 function Fibonacci(num) {
        if(num < 2)
            return num;
        return Fibonacci(num - 1) + Fibonacci(num - 2);
 }
 console.log(Fibonacci(parseInt(input)));