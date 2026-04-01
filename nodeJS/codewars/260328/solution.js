function zero(fn) { return fn ? fn(0) : 0; }
function one(fn) { return fn ? fn(1) : 1; }
function two(fn) { return fn? fn(2) : 2; }
function three(fn) { return fn? fn(3) : 3; }
function four(fn) { return fn? fn(4) : 4; }
function five(fn) { return fn? fn(5) : 5; }
function six(fn) { return fn? fn(6) : 6; }
function seven(fn) { return fn? fn(7) : 7; }
function eight(fn) { return fn ? fn(8) : 8; }
function nine(fn) { return fn ? fn(9) : 9; }

const plus = (y) => (x) => x + y;
const minus = (y) => (x) => x - y;
const times = (y) => (x) => x * y;
const dividedBy = (y) => (x) => Math.floor(x / y);

function dotest1(n1, op, n2, res, txt){
    Test.assertEquals(n1(op(n2())), res, txt);
}

describe("Tests", () => {
  it("test", () => {
    dotest1(seven, times, five, 35, "seven(times(five ()))");
    dotest1(four, plus, nine, 13, "four (plus(nine ()))");
    dotest1(eight, minus, three, 5, "eight(minus(three()))");
    dotest1(six, dividedBy, two, 3, "six(dividedBy(two()))");
  });
});
