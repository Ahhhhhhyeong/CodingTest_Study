/**
 * 입출력 예
[1, 1, 1, 1, 1]	
3	
    5
[4, 1, 2, 1]	
4	
    2
걸린시간: 20분
 */

const numbers = [1, 1, 1, 1, 1];
const target = 3;

// 호출
console.log(solution(numbers, target));

function solution(numbers, target) {
    let answer = 0;
    const lenght = numbers.length;
    // target을 만들 수 있는 모든 경우의 수를 탐색
    // +, - 부호를 붙여가며 재귀적으로 탐색
    function dfs(index, currentSum) {
        // 모든 숫자를 다 사용한 경우
        if (index === lenght) {
            // 현재 합이 target과 같다면 경우의 수 증가
            if (currentSum === target) {
                answer++;
            }
            return;
        }

        // 현재 숫자에 + 부호를 붙여서 다음 숫자로 이동
        dfs(index + 1, currentSum + numbers[index]);
        // 현재 숫자에 - 부호를 붙여서 다음 숫자로 이동
        dfs(index + 1, currentSum - numbers[index]);
    }
    // 탐색 시작
    dfs(0, 0);
    return answer;
}