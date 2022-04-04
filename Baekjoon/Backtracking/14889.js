/** 스타트와 링크 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const startLink = (arr) => {
    const N = +arr[0];
    const halfN = N / 2;
    const stats = input.slice(1).map((x) => x.split(' ').map(Number));

    const check = new Array(N).fill(0);
    let min = Number.MAX_SAFE_INTEGER;
    function dfs(L, K){
        if(L === halfN){ // 스타트팀에 N/2 명 뽑혔을 때
            const sTeam = [];
            const lTeam = [];
            let sSum = (lSum = 0);
            for(let i = 0; i < N; i++){
                if(check[i]) sTeam.push(i); // check 배열은 스타트팀에 입력
                else lTeam.push(i);         // 아닐경우 링크팀에 입력
            }
            for(let i = 0; i < halfN; i++){
                for(let j = i+1; j < halfN; j++){
                    sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
                    lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
                }
            }
            console.log(sTeam, lTeam);
            min = Math.min(min, Math.abs(sSum - lSum));
            return;
        }

        for(let i = K; i < N; i++){
            check[i] = 1;
            dfs(L + 1, i + 1);
            check[i] = 0;
        }
    }
    dfs(0,0);
    return min;
}

console.log(startLink(input));
