// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;

// console.log(testit('a1b2c3D4')); // true
// console.log(testit('a1b2c3d')); // false
// console.log(testit('1a2b3c4d')); // false
// console.log(testit('a1b2c3d4e')); // false
// console.log(testit('abc12')); // false

function testit(s) {
  return REGEXP.test(s);
}

//---------------------------------------------------------
/**
 * Mean Square Error
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

 * @param {number[]} firstArray 
 * @param {number[]} secondArray 
 */

console.log(solution([1, 2, 3], [4, 5, 6]));              // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));  // 16.5
console.log(solution([-1, 0], [0, -1]));                  // 1  

function solution (firstArray, secondArray) {
  let sum = 0;
  for(let i = 0; i < firstArray.length; i++){
    sum += Math.abs(firstArray[i] - secondArray[i]) ** 2;
  }
  return sum / firstArray.length;
}