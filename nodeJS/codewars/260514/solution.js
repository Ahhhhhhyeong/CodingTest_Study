// Failed... I can't understand....
const board = [
        ["■■■■"],
        ["■□□■"],
        ["■□□■"],
        ["■■■■"],
    ];
const block =  [["□□"],["□□"]];

console.log(playtetris(board, block));

const dx = [-1,0,1,0];
const dy = [0,1,0,-1];
function playtetris(board, block) {
    // 상하좌우 체크를 하여 연결되어있는지 체크
    // 연결이 되어있는경우 connected에 좌표값 삽입
    const connected = []; // connected to anoter ㅁ shape area
    const board_split = [];
    for(let i = 0; i < board.length; i++){
        board_split.push(board[i][0].split(''));
    }
    console.log(board_split);
    const visited = Array.from(
        {length: board_split.length}, 
        () =>new Array(board_split[0].length).fill(false)
    );

    // board_split에서 □ 가 연결되는 좌표 값 찾기
    for(let i = 0; i < board.length; i++){ 
        for(let j = 0; j < board[i].length; j++){ 
            if(!visited[i][j] && board[i][j] === '□')
            { 
                let conn = []; 
                visited[i][j] = true; 
                conn.push([i, j]); 
                dfs(i, j, board, visited, conn); 
                connected.push(conn); 
            } 
        } 
    }

    console.log(connected);
    return "";
}

const dfs = (s, e, b, visit, conn) => {
    for(let i = 0; i < dx.length; i++){
        let nx = s + dx[i];
        let ny = e + dy[i];
        if(nx >= 0 && nx < b[0].length && ny >= 0 && ny < b[0].length 
            && board[nx][ny] === '□' && !visit[nx][ny]){
            conn.push([nx, ny]);
            visit[nx][ny] = true;
            dfs(nx, ny, b, visit, conn);
        }
    }
}