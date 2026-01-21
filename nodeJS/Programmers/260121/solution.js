/**
 * 게임 맵 최단 거리 
 * 입출력 예시: 
 maps	answer
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
 */

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
console.log(solution(maps));

function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;

    // BFS 탐색을 위한 큐
    const queue = [];
    // 시작 시점 추가
    queue.push([0, 0]);
    // 이동 방향 (상, 하, 좌, 우)
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    // 방문 기록
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;

    while (queue.length > 0){
        const [x, y] = queue.shift(); // 큐에서 현재 위치를 꺼냄
 
        for(const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy; 
            
            // 맵의 범위를 벗어나지 않고, 이동할 수 있는 칸인지 판단
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]){
                maps[nx][ny] = maps[x][y] + 1; // 이동거리 갱신
                queue.push([nx, ny]); // 다음 위치를 큐에 추가
                visited[nx][ny] = true; // 방문 처리
            }
        }
    }
    // 도착 지점의 값이 여전히 1이면 도달하지 못한 것
    answer = maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];

    return answer;
}
