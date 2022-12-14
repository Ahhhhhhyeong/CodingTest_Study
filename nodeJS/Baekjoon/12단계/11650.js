/** 좌표 정렬하기 
 * 11650번, 11651번 
 * 11650 : x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로
 * 11651 : y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const cordArr = input.map(cord => cord.split(' ').map(Number));

const cordArrSortAtoB = (arr) => { // 11650
    let results = ''; 
    arr.sort((a,b) => {
        if(a[0] !== b[0]){
            return a[0] - b[0];
        }
        return a[1] - b[1];
    }).forEach(cord => {
        results += `${cord[0]} ${cord[1]}\n`;
    });
 
    return results;
}

const cordArrSortBtoA = (arr) => { // 11651
    let results = '';
    arr.sort((a,b) =>{
        if(a[1] !== b[1]) 
            return a[1] - b[1];
        return a[0] - b[0];
    }).forEach( cord => {
        results += `${cord[0]} ${cord[1]}\n`
    });
    return results;
}

console.log(cordArrSortAtoB(cordArr)); // 11650번
console.log(cordArrSortBtoA(cordArr)); // 11651번