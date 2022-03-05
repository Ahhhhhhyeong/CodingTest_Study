/* 직사각형 만들기 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);
let arrX = input.filter((v,i)=>i%2===0);
let arrY = input.filter((v,i)=>i%2!=0);
console.log(getVertex(arrX), getVertex(arrY));
function getVertex(arr){
    return arr[0] === arr[1] ? arr[2] : (arr[1]===arr[2]?arr[0]:arr[1]);
}