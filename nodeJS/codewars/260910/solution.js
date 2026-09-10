/**Sudoku Solver
 * 
 * Write a function that will solve a 9x9 Sudoku puzzle. 
 * The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" 
(i.e. determinable; there will be no need to assume and test possibilities on unknowns) 
and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

 */

// console.log(sudoku([
// [5,3,0,0,7,0,0,0,0],
// [6,0,0,1,9,5,0,0,0],
// [0,9,8,0,0,0,0,6,0],
// [8,0,0,0,6,0,0,0,3],
// [4,0,0,8,0,3,0,0,1],
// [7,0,0,0,2,0,0,0,6],
// [0,6,0,0,0,0,2,8,0],
// [0,0,0,4,1,9,0,0,5],
// [0,0,0,0,8,0,0,7,9]]));

function sudoku(puzzle) {
    const solve = puzzle.map(row => [...row]);


    while(!checkPuzzle(solve)){
        let changed = false;

        for(let i = 0; i < puzzle.length; i++){
            for(let j = 0; j < puzzle[i].length; j++){
                if(solve[i][j] === 0){
                    const candidates = [];
    
                    for(let num = 1; num <= 9; num++){
                        if(canPlace(solve, i, j, num)){
                            candidates.push(num);
                        }
                    }
    
                    if(candidates.length === 1) {
                        solve[i][j] = candidates[0];
                        changed = true;
                    }
                }
            }
        }

        if(!changed){
            throw new Error('후보가 하나인 칸이 없어 더 진행할 수 없습니다.')
        }    
    }

    return solve;
}

function checkPuzzle(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) return false;
        }
    }
    return true;
}

function canPlace(board, row, col, num){
    // check row
    for(let i = 0; i < board[0].length; i++){
        if(board[row][i] === num) return false;
    }

    // check col
    for(let i = 0; i < board.length; i++){
        if(board[i][col] === num) return false;
    }

    // 3*3
    const startRow = Math.floor(row/3)*3;
    const startCol = Math.floor(col/3)*3;

    for(let i = startRow; i < startRow + 3; i++){
        for(let j = startCol; j < startCol + 3; j++){
            if(board[i][j] === num) return false;
        }
    }
    return true;
}


describe('Sudoku', function(){
    var puzzle = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]];

    var solution = [
      [5,3,4,6,7,8,9,1,2],
      [6,7,2,1,9,5,3,4,8],
      [1,9,8,3,4,2,5,6,7],
      [8,5,9,7,6,1,4,2,3],
      [4,2,6,8,5,3,7,9,1],
      [7,1,3,9,2,4,8,5,6],
      [9,6,1,5,3,7,2,8,4],
      [2,8,7,4,1,9,6,3,5],
      [3,4,5,2,8,6,1,7,9]];

    it('Puzzle 1', function() {
      const actual = sudoku(puzzle.map(_ => _.slice()));
      const assert = require('node:assert/strict');
      const _stringify = board =>
          board.map(row => row.join(' ')).join('\n');
      assert.deepEqual(actual, solution, 
        "Incorrect solution for the following puzzle:\n\n" + _stringify(puzzle) 
                       + "\n\nexpected:\n\n" + _stringify(solution)
                       + "\n\nactual:\n\n" + _stringify(actual)
                       + "\n\n");
    });
});