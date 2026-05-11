// 최대공약수와 최소공배수 구하기

console.log(solution(3,12));

function solution(n, m) {
    var answer = [];
    
    const gcd = (a,b) => (a % b === 0 ? b : gcd(b, a % b));
    answer.push(gcd(n,m)); // 최대공약수 

    const lcm = (a,b) => (a * b) / answer[0]; // 최소 공배수
    answer.push(lcm(n,m));
    
    return answer;
}