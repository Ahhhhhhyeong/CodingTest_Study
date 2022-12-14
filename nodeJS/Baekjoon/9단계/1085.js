/** 직사각형에서 탈출 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
const vertex = input[0].split(' ').map(x => parseInt(x));
let point1 = vertex[0] <= vertex[2]/2 ? vertex[0] : vertex[2] - vertex[0];
let point2 = vertex[1] <= vertex[3]/2 ? vertex[1] : vertex[3] - vertex[1];
console.log(point1 <= point2 ? point1 : point2);