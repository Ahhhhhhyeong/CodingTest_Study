/**
 * 1. Express u(n) as a function of n, u[n - 1], u[n - 2]. (not tested).
// u(n) = u(n - u)n-1)) + u(n - u(n-2));
 * 2. Given two numbers n, k (integers > 2) write the function length_sup_u_k(n, k) or lengthSupUK or length-sup-u-k returning the number of terms u[i] >= k with 1 <= i <= n. If we look above we can see that between u[1] and u[23] we have four u[i] greater or equal to 12: length_sup_u_k(23, 12) => 4
 * 3. Given n (integer > 2) write the function comp(n) (cmp in COBOL) returning the number of times where a term of u is less than its predecessor up to and including u[n].
 */

function lengthSupUK(n, k) {
    const u = [0, 1, 1]; // u[0] is not used

    for(let i = 3; i <= n; i++) {
        u[i] = u[i - u[i - 1]] + u[i - u[i - 2]];
    }

    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(u[i] >= k) count++;
    }

    return count;
}


function comp(n) {
    const u = [0, 1, 1]; // u[0] is not used
    
    for(let i = 3; i <= n; i++) {
        u[i] = u[i - u[i - 1]] + u[i - u[i - 2]];
    }

    let count = 0;
    for(let i = 2; i <= n; i++){
        if(u[i] < u[i-1]) count++;
    }
    return count;
}

function dotest1(n, k, res) {
    Test.assertEquals(lengthSupUK(n, k), res);
}
function dotest2(n, res) {
    Test.assertEquals(comp(n), res);
}

describe("Basic tests", function() {
    it("lengthSupUK", function() {
        dotest1(50, 25, 2);
        dotest1(3332, 973, 1391);
        dotest1(2941, 862, 1246);
        dotest1(3177, 573, 2047);
        dotest1(1745, 645, 474);
    });
});
describe("Basic tests", function() {
    it("comp", function() {
        dotest2(74626, 37128);
        dotest2(71749, 35692);
        dotest2(56890, 28281);
        dotest2(60441, 30054);
        dotest2(21361, 10581);
    });
});