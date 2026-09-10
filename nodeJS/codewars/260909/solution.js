/**
 * Conway's Game of Life - Unlimited Edition
 * Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). 
    The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. 
    The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:
 */

// console.log(getGeneration([[1,1,1]], 2));
// console.log(getGeneration([
//       [1, 0, 0],
//       [0, 1, 1],
//       [1, 1, 0]
//     ], 2,));


function getGeneration(cells, generations) {
    let nextGenerations = cells.map(row => [...row]);

    for(let i = 1; i <= generations; i++){
        const width = nextGenerations[0].length + 2;
    
        const expanded = [
            Array(width).fill(0),
            ...nextGenerations.map(row => [0, ...row, 0]),
            Array(width).fill(0)
        ];

        nextGenerations = htmlize(expanded);
    }
    
    // console.log(cells, `Change ${generations} times : `, nextGenerations);
    
    let minRow = Infinity;
    let maxRow = -1;
    let minCol = Infinity;
    let maxCol = -1;

    for(let i = 0; i < nextGenerations.length; i++){
        for(let j = 0; j < nextGenerations[i].length; j++){
            if(nextGenerations[i][j] === 1){
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);
                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    
    if(maxRow < 0) return [[]];

    return nextGenerations.slice(minRow, maxRow+1).map(row => row.slice(minCol, maxCol + 1));
}

function htmlize(cells) {
    const generation = cells.map(row => Array(row.length).fill(0));
    const dr = [-1,0,1];
    const dc = [-1,0,1];
    
    for(let i = 0; i < cells.length; i++){
        for(let j = 0; j < cells[i].length; j++){
            let count = 0;
            for(const rowOffset of dr){
                for(const colOffset of dc){
                    const nr = i + rowOffset;
                    const nc = j + colOffset;
                    
                    if(rowOffset === 0 && colOffset === 0) continue;
                    if(nr < 0 || nr >= cells.length) continue;
                    if(nc < 0 || nc >= cells[nr].length) continue;
                    
                    count += cells[nr][nc] === 1 ? 1: 0;
                }
            }
            
            generation[i][j] = cells[i][j] === 1 && count > 1 && count < 4 ? 1 : 
                                cells[i][j] === 0 && count === 3 ? 1 : 0;
        }
    }

    return generation;
}

describe('Sample tests', function () {

  const { fail, deepStrictEqual: deepEqual } = require('node:assert/strict');

  function doTest(input, generations, expected) {
    const inputCopy = input.map(row => row.slice());
    const actual = getGeneration(inputCopy, generations);
    if (!Array.isArray(actual) || !actual.every(Array.isArray))
        fail('you must return a 2D array, but you returned: ' + actual);
 
    const message =
      `for universe:\n${JSON.stringify(input)}\nafter ${generations} generations,` +
      ` expected:\n${JSON.stringify(expected)}\n but got:\n${JSON.stringify(actual)}\n\n`
     ;
    deepEqual(actual, expected, message);
    deepEqual(inputCopy, input, '\n=== DO NOT MUTATE THE INPUT MATRIX ! ===\n');
  }

  it('Single Glider \n', function () {
    doTest([
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0]
    ], 2, [
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ]);
  });
});
