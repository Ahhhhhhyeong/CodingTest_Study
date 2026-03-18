/** 아이템 줍기
 * https://school.programmers.co.kr/learn/courses/30/lessons/87694
 * 
 * 입출력 예
rectangle	characterX	characterY	itemX	itemY	result
[[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]]	1	3	7	8	17
[[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]]	9	7	6	1	11
[[1,1,5,7]]	1	1	4	7	9
[[2,1,7,5],[6,4,10,10]]	3	1	7	10	15
[[2,2,5,5],[1,3,6,4],[3,1,4,6]]	1	4	6	3	10
 */

const rectangles = [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;

console.log(solution(rectangles, characterX, characterY, itemX, itemY));

function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0;
    const SIZE = 102; // 최대 좌표는 50이므로, 2배로 확장한 후에도 충분히 커야 함
    const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

    // 1. 좌표 2배로 확장
    const scaledRectangles = rectangle.map(([x1, y1, x2, y2]) => [x1 * 2, y1 * 2, x2 * 2, y2 * 2]);
    const scaledCharacterX = characterX * 2;
    const scaledCharacterY = characterY * 2;
    const scaledItemX = itemX * 2;
    const scaledItemY = itemY * 2;

    // 2. 모든 사각형 1로 채우기
    for(const [x1, y1, x2, y2] of scaledRectangles) {
        for(let x = x1; x <= x2; x++) {
            for(let y = y1; y <= y2; y++) {
                board[x][y] = 1;
            }
        }
    }

    // 3. 사각형 내부는 0으로 채우기
    for(const [x1, y1, x2, y2] of scaledRectangles) {
        for(let x = x1 + 1; x < x2; x++) {
            for(let y = y1 + 1; y < y2; y++) {
                board[x][y] = 0;
            }
        }
    }

    // 4. BFS로 최단 경로 찾기
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    const queue = [[scaledCharacterX, scaledCharacterY, 0]];
    visited[scaledCharacterX][scaledCharacterY] = true;

    while(queue.length) {
        const [x, y, dist] = queue.shift();

        if(x === scaledItemX && y === scaledItemY) {
            return dist / 2;
        }

        for(const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if(nx < 0 || nx >= SIZE || ny >= SIZE || ny < 0) continue;
            if(visited[nx][ny]) continue;
            if(board[nx][ny] !== 1) continue;

            visited[nx][ny] = true;
            queue.push([nx, ny, dist + 1]);
        }
    }

    return answer;
}