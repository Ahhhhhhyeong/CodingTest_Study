/**Greed is a dice game played with five six-sided dice. 
 * Your mission, should you choose to accept it, is to score a throw according to these rules. 
 * You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
Each of 5 dice can only be counted once in each roll. 
For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, 
but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array. 
*/


function score( dice ) {
  const points = {
    1: 100,
    2: 0,
    3: 0,
    4: 0,
    5: 50,
    6: 0
  }
  const triplets = {
    1: 1000,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600
  }
  
  const count = [0,0,0,0,0,0]; // count of each dice value
  for(let d of dice){
    count[d-1] += 1;
  }
  
  let score = 0;
  for(let i = 0; i < 6; i++){
    if(count[i] >= 3){
        score += triplets[i+1];
        count[i] -= 3;
    }
    score += count[i] * points[i+1];
  }
  return score;
}

describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    // assert.strictEqual( score( [2, 3, 4, 6, 2] ), 0, "Incorrect answer for dice = [2, 3, 4, 6, 2]" );
    score( [2, 3, 4, 6, 2] );
  });
  
  it( "should value this triplet correctly", function() {
    // assert.strictEqual( score( [4, 4, 4, 3, 3] ), 400, "Incorrect answer for dice = [4, 4, 4, 3, 3]" );
    score( [4, 4, 4, 3, 3] );
  });
  
  it( "should value this mixed set correctly", function() {
    // assert.strictEqual( score( [2, 4, 4, 5, 4] ), 450, "Incorrect answer for dice = [2, 4, 4, 5, 4]" );
    score( [2, 4, 4, 5, 4] );
  });
});