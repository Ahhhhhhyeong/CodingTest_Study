/**
 * 첫째 줄에 다음 세 가지 중 하나를 출력한다.
 * A가 B보다 큰 경우에는 '>'를 출력한다.
 * A가 B보다 작은 경우에는 '<'를 출력한다.
 * A와 B가 같은 경우에는 '=='를 출력한다.
 */

const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 띄워쓰기에 따른 숫자 분리
const [n, m] = input[0].split(" ");

// 숫자형으로 설정
const a = parseInt(n);
const b = parseInt(m);

let result = "";
if(a > b)
    result = ">";
else if(a < b)
    result = "<";
else if(a == b)
    result = "==";

console.log(result);