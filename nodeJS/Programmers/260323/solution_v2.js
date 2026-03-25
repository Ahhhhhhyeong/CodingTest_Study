/**
 * 미생물 연구 - 단순 버전 (디버깅용)
 * 문제 분석:
 * - N×N 용기 → 좌표 (0,0)부터 (N,N)까지
 * - 직사각형은 꼭짓점 좌표로 주어지므로 [r1,r2) × [c1,c2)로 해석
 * - 즉, r1≤r<r2, c1≤c<c2인 단위 칸들이 포함됨
 */

function solution(input) {
    const [N, Q] = input[0].split(' ').map(Number);
    
    // microbes[id] = { id, cells: Set<string> }
    // cells는 "r,c" 형식의 문자열 집합
    const microbes = {};
    let nextId = 1;
    
    const results = [];
    
    for (let q = 1; q <= Q; q++) {
        const [r1, c1, r2, c2] = input[q].split(' ').map(Number);
        
        // ===== 1단계: 미생물 투입 =====
        const newId = nextId++;
        const newCells = new Set();
        
        // 새 영역의 셀들 (반열림 구간)
        for (let r = r1; r < r2; r++) {
            for (let c = c1; c < c2; c++) {
                newCells.add(`${r},${c}`);
            }
        }
        
        // 기존 미생물들 처리
        const newMicrobes = {};
        for (const id in microbes) {
            const microbe = microbes[id];
            const remaining = new Set();
            let hasOverlap = false;
            
            // 겹치는 부분 제거
            for (const cell of microbe.cells) {
                if (!newCells.has(cell)) {
                    remaining.add(cell);
                } else {
                    hasOverlap = true;
                }
            }
            
            // 겹치는 부분이 있었고 남은 부분이 있으면 연결성 검사
            if (hasOverlap && remaining.size > 0) {
                const groups = findConnectedComponents(remaining);
                if (groups.length === 1) {
                    // 연결성 유지
                    newMicrobes[id] = { id, cells: remaining };
                }
                // groups.length > 1이면 전부 제거
            } else if (!hasOverlap) {
                // 겹치지 않음 → 그대로 유지
                newMicrobes[id] = microbe;
            }
        }
        
        // 새 미생물 추가
        newMicrobes[newId] = { id: newId, cells: newCells };
        
        // ===== 2단계: 배양 용기 이동 =====
        const sorted = Object.values(newMicrobes).sort((a, b) => {
            const areaA = a.cells.size;
            const areaB = b.cells.size;
            if (areaA !== areaB) return areaB - areaA;  // 넓이 큰 순
            return a.id - b.id;  // ID 작은 순
        });
        
        const moved = {};
        for (const microbe of sorted) {
            const placed = tryPlace(microbe, moved, N);
            if (placed) {
                moved[microbe.id] = placed;
            }
        }
        
        // ===== 3단계: 성과 계산 =====
        let profit = 0;
        const ids = Object.keys(moved).map(Number);
        
        for (let i = 0; i < ids.length; i++) {
            for (let j = i + 1; j < ids.length; j++) {
                const idA = ids[i];
                const idB = ids[j];
                
                if (isAdjacent(moved[idA].cells, moved[idB].cells)) {
                    profit += moved[idA].cells.size * moved[idB].cells.size;
                }
            }
        }
        
        results.push(profit);
        // 다음 실험을 위해 상태 갱신
        Object.keys(microbes).forEach(k => delete microbes[k]);
        for (const id in moved) {
            microbes[id] = moved[id];
        }
    }
    
    return results.join('\n');
}

// 연결된 셀들의 그룹을 찾는 BFS
function findConnectedComponents(cellSet) {
    const visited = new Set();
    const groups = [];
    
    for (const cell of cellSet) {
        if (visited.has(cell)) continue;
        
        // BFS
        const group = [];
        const queue = [cell];
        visited.add(cell);
        
        while (queue.length > 0) {
            const curr = queue.shift();
            group.push(curr);
            
            const [r, c] = curr.split(',').map(Number);
            for (const [dr, dc] of [[0,1], [0,-1], [1,0], [-1,0]]) {
                const nr = r + dr;
                const nc = c + dc;
                const nkey = `${nr},${nc}`;
                if (cellSet.has(nkey) && !visited.has(nkey)) {
                    visited.add(nkey);
                    queue.push(nkey);
                }
            }
        }
        
        groups.push(group);
    }
    
    return groups;
}

// microbe를 배치할 수 있는 최적 위치 찾기
function tryPlace(microbe, alreadyPlaced, N) {
    // microbe의 bounding box
    let minR = Infinity, maxR = -Infinity;
    let minC = Infinity, maxC = -Infinity;
    
    for (const cell of microbe.cells) {
        const [r, c] = cell.split(',').map(Number);
        minR = Math.min(minR, r);
        maxR = Math.max(maxR, r);
        minC = Math.min(minC, c);
        maxC = Math.max(maxC, c);
    }
    
    const height = maxR - minR;
    const width = maxC - minC;
    
    // 이미 배치된 셀들
    const usedCells = new Set();
    for (const id in alreadyPlaced) {
        for (const cell of alreadyPlaced[id].cells) {
            usedCells.add(cell);
        }
    }
    
    // 최적 위치 찾기
    // N×N 칸이므로 유효 칸 인덱스는 0..N-1
    for (let targetR = 0; targetR + height < N; targetR++) {
        for (let targetC = 0; targetC + width < N; targetC++) {
            // 이 위치에 배치할 수 있는지 확인
            const offsetR = targetR - minR;
            const offsetC = targetC - minC;
            
            let canPlace = true;
            const newCells = new Set();
            
            for (const cell of microbe.cells) {
                const [r, c] = cell.split(',').map(Number);
                const nr = r + offsetR;
                const nc = c + offsetC;
                
                // 범위 체크 (0 <= nr,nc < N)
                if (nr < 0 || nr >= N || nc < 0 || nc >= N) {
                    canPlace = false;
                    break;
                }
                
                // 충돌 체크
                if (usedCells.has(`${nr},${nc}`)) {
                    canPlace = false;
                    break;
                }
                
                newCells.add(`${nr},${nc}`);
            }
            
            if (canPlace) {
                return { id: microbe.id, cells: newCells };
            }
        }
    }
    
    return null;
}

// 두 미생물이 인접한지 체크 (cellsA와 cellsB는 Set<string>)
function isAdjacent(cellsA, cellsB) {
    for (const cell of cellsA) {
        const [r, c] = cell.split(',').map(Number);
        for (const [dr, dc] of [[0,1], [0,-1], [1,0], [-1,0]]) {
            if (cellsB.has(`${r+dr},${c+dc}`)) {
                return true;
            }
        }
    }
    return false;
}

// ===== 입출력 =====
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    console.log(solution(input));
});
