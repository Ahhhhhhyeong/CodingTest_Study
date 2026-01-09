/**
입출력 예
n = 9	
wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	
    result = 3
n = 4	
wires = [[1,2],[2,3],[3,4]]	
    result = 0
n = 7	
wires = [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	
    result = 1
*/

// 예시 입력
const n = 7	;
const wires = [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	;

// 예시 출력
const result = solution(n, wires);
console.log(result);

// 풀이 시작
function solution(n, wires) {
    let answer = -1;
    // 방문 기록용 배열
    const visited = new Array(n + 1).fill(false);
    // 인접 리스트 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    // DFS 함수
    function dfs(node) {
        visited[node] = true;
        let count = 1; // 현재 노드 포함
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                count += dfs(neighbor);
            }
        }
        return count;
    }
    
    let minDiff = Infinity;
    
    // 각 전선을 끊어보며 탐색
    for (const [v1, v2] of wires) {
        // 방문 기록 초기화
        visited.fill(false);
        
        // 끊은 전선의 한쪽 노드부터 DFS 시작
        visited[v2] = true; // 끊은 쪽 노드 방문 처리
        const count1 = dfs(v1);
        const count2 = n - count1;
        
        const diff = Math.abs(count1 - count2);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    
    answer = minDiff;
    return answer;
}