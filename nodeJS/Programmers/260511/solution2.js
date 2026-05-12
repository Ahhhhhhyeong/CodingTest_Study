// 2025 카카오 하반기 1차 - 노란불 신호등
// 각 신호등 주기의 최소공배수 
// 각 신호등의 노란불 시작 시각!
// 모든 신호등이 노랑이 되는 시간 
// 주기 P = g + y + r
// 노랑이 돌아오는 주기 => P * t - r = (g+y+r)*t - r


console.log(solution([[2, 1, 2], [5, 1, 1]]))

function solution(signals) {
    let answer = -1;
    // 모든 신호등의 주기의 최소 공배수
    const n = signals.length;
    let maxTime = 1;
    for(let i = 0; i < n; i++){
        let p = signals[i][0] + signals[i][1] + signals[i][2];
        maxTime = lcm(maxTime, p);
    }
    
    // every light signs been yellow sign
    for(let t = 0; t <= maxTime; t++){
        let isAllYellow = true;
        for(let j = 0; j < n; j++){
            let g = signals[j][0];
            let y = signals[j][1];
            let r = signals[j][2];
            let P = g + y + r;

            let remain = (t-1) % P;

            if(!(g <= remain && remain < g+y)){
                isAllYellow = false;
                break;
            }
        }
        if(isAllYellow) return t;
    }
    
    return answer;
}

function lcm(a, b){
    return (a * b) / gcd(a, b);
}

function gcd(a, b){
    return a % b === 0 ? b : gcd(b, a%b);
}