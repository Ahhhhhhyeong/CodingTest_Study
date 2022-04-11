/** RGB 거리 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const rgb = input.map(v => v.split(' ').map(x => +x));

const paied = (n, rgb) => {
    const memo = [];
    memo.push(rgb[0]);
    for(let i = 1; i < n; i++){
        let redHouse = Math.min(rgb[i-1][1], rgb[i-1][2]) + rgb[i][0];
        let greenHouse = Math.min(rgb[i-1][0], rgb[i-1][2]) + rgb[i][1];
        let blueHouse = Math.min(rgb[i-1][0], rgb[i-1][1]) + rgb[i][2];
        let minCost = [redHouse, greenHouse, blueHouse];
        memo.push(minCost);      
    }    
    console.log(Math.min(...memo[N-1]));
}

paied(N, rgb);

/**
         let redHouse = Math.min(rgb[i-1][1], rgb[i-1][2]) + rgb[i][0];
         let greenHouse = Math.min(rgb[i-1][0], rgb[i-1][2]) + rgb[i][1];
         let blueHouse = Math.min(rgb[i-1][0], rgb[i-1][1]) + rgb[i][2];
         let minCost = [redHouse, greenHouse, blueHouse];
         memo.push(minCost);
 */