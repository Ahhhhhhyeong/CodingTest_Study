/**
 * If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 */


function isSolved(board) {
  // check rows
  for(let i = 0; i < board.length; i++){
    if(board[i][0] === board[i][1] && 
        board[i][0] === board[i][2] && 
        board[i][0] !== 0){
            return board[i][0];
    }
  }

  // check columns
  for(let c = 0; c < board[0].length; c++){
    if(board[0][c] === board[1][c] &&
        board[1][c] === board[2][c] &&
        board[0][c] !== 0){
        return board[0][c];
    }
  }

  // check diagonal
  if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== 0){
    return board[1][1];
  }
  if(board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== 0){
    return board[1][1];
  }

  // check 0
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++){
        if(board[i][j] === 0) return -1;
    }
  }

  // draw
  return 0;
}


describe("Tests", () => {
  it("should return -1 when the game is not finished", () => {
    assert.strictEqual(isSolved([[0,0,1],[0,1,2],[2,1,0]]), -1);
  });

  it("should return 1 when X wins", () => {
    assert.strictEqual(isSolved([[1,1,1],[0,2,2],[0,0,0]]), 1);
  });

  it("should return 2 when O wins", () => {
    assert.strictEqual(isSolved([[1,1,2],[0,2,0],[2,1,0]]), 2);
  });

  it("should return 0 when the game is a draw", () => {
    assert.strictEqual(isSolved([[1,2,1],[1,1,2],[2,1,2]]), 0);
  });
});
