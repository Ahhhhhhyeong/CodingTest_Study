/** #13 이슈
 * 퍼즐 조각 채우기
 * 입출력 예
game_board	table	result
[[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]	[[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]	14
[[0,0,0],[1,1,0],[1,1,1]]	[[1,1,1],[1,0,0],[0,0,0]]	0

* 블록 회전은 가능함
* 빈칸을 table의 블록으로 꽉 채워야 함
 */

const game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]];
const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]];
console.log(solution(game_board, table)); // result: 14

function solution(game_board, table) {
    const n = game_board.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // 좌표 집합을 (0,0) 기준으로 평행이동해서 "같은 모양"은 같은 표현이 되도록 정규화
    function normalize(shape) {
        let minX = Infinity;
        let minY = Infinity;

        for (const [x, y] of shape) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
        }

        return shape
            .map(([x, y]) => [x - minX, y - minY])
            .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }

    // 정규화된 좌표를 문자열 키로 만들어 빠르게 비교
    function toKey(shape) {
        return normalize(shape).map(([x, y]) => `${x},${y}`).join('|');
    }

    // 원점 기준 90도 회전: (x, y) -> (y, -x)
    function rotate90(shape) {
        return shape.map(([x, y]) => [y, -x]);
    }

    // board에서 target(0 또는 1)으로 연결된 모든 도형을 BFS로 추출
    function extractShapes(board, target) {
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const shapes = [];

        for (let startX = 0; startX < n; startX++) {
            for (let startY = 0; startY < n; startY++) {
                if (visited[startX][startY] || board[startX][startY] !== target) continue;

                const queue = [[startX, startY]];
                let head = 0;
                const shape = [];
                visited[startX][startY] = true;

                while (head < queue.length) {
                    const [x, y] = queue[head++];
                    shape.push([x, y]);

                    for (const [dx, dy] of directions) {
                        const nx = x + dx;
                        const ny = y + dy;

                        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                        if (visited[nx][ny] || board[nx][ny] !== target) continue;

                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }

                shapes.push(normalize(shape));
            }
        }

        return shapes;
    }

    // 1) 테이블에서 퍼즐 조각(1) 추출 - 좌표값으로 추출
    const blocks = extractShapes(table, 1);
    // 2) 게임 보드에서 빈칸(0) 추출 - 좌표값으로 추출
    const empties = extractShapes(game_board, 0);

    // 각 블록에 대해 0/90/180/270 회전 모양 키를 미리 계산
    const blockInfos = blocks.map((shape) => {
        const keys = new Set();
        let rotated = shape;

        for (let i = 0; i < 4; i++) {
            keys.add(toKey(rotated));
            rotated = normalize(rotate90(rotated));
        }

        return {
            size: shape.length,
            keys,
            used: false,
        };
    });

    let answer = 0;

    // 3) 빈칸 하나마다 아직 사용하지 않은 블록 중 맞는 것 1개를 찾아 채움
    for (const empty of empties) {
        const emptyKey = toKey(empty);

        for (const block of blockInfos) {
            if (block.used) continue;
            if (block.size !== empty.length) continue;

            if (block.keys.has(emptyKey)) {
                block.used = true;
                answer += block.size;
                break;
            }
        }
    }

    return answer;
}