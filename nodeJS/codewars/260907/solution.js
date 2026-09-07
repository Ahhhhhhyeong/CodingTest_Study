/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
he range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

 */

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

function solution(list){
    const answer = [];
    let check = [];
    check.push(list[0]);
    for(let i = 1; i < list.length; i++){
        if(check[check.length - 1] + 1 == list[i]) {
            check.push(list[i]);
        } else {
            if(check.length === 2){
                answer.push(check[0]);
                answer.push(check[1]);
                check = [];
            } else if(check.length > 2){
                answer.push(`${check[0]}-${check[check.length-1]}`);
                check = [];
            } else {
                answer.push(check.pop());
            }
            // for next...
            check.push(list[i]);
        }

        // last one
        if(i === list.length - 1){
            if(check.length === 2){
                answer.push(check[0]);
                answer.push(check[1]);
                check = [];
            } else if(check.length > 2){
                answer.push(`${check[0]}-${check[check.length-1]}`);
                check = [];
            } else {
                answer.push(check.pop());
            }
        }
    }

    return answer.join(',');
}

function formatRun(run) {
    return run.length >= 3 ? `${run[0]}-${run[run.length-1]}` : run.join(',');
}

function feedback(list) {
    if (list.length === 0) return '';

    const answer = [];
    let run = [list[0]];

    for (let i = 1; i < list.length; i++) {
        if (run[run.length - 1] + 1 === list[i]) {
            run.push(list[i]);
        } else {
            answer.push(formatRun(run));
            run = [list[i]];
        }
    }

    answer.push(formatRun(run));
    return answer.join(',');
}

describe("Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  });
  it("feedback formats ranges and individual integers", () => {
    assert.strictEqual(feedback([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20");
    assert.strictEqual(feedback([5]), "5");
    assert.strictEqual(feedback([]), "");
    assert.strictEqual(feedback([1, 2]), "1,2");
    assert.strictEqual(feedback([1, 2, 3]), "1-3");
  });
});
