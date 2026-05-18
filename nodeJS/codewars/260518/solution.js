// https://www.codewars.com/kata/5a1463678ba9145a670000f9
/*
"O" = Light off
"R" = Red light
"Y" = Yellow light
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO
*/

const time = "22:32:45";

console.log(berlinClock(time));
function berlinClock(time) {
    const [h, m, s] = time.split(":");
    // Second Blinker: Alternates every second. true = light on / false: light off
    let secondBlinker = s % 2 === 0 ? true : false; 
    // Top Row: 5 hours intervals.
    const topRow = Math.floor(h / 5);
    // Second Row: 1 hours intervals
    const secondRow = h % 5;
    // Third Row: 5 min intervals
    const thirdRow = Math.floor(m / 5);
    // Bottom Row: 1 minute intervals -> Third Row less
    const bottomRow = Math.floor(m % 5);
    
    let topRowColor = '';
    let secondRowColor = '';
    let thirdRowColor = ''; 
    let bottomRowColor = '';

    for(let i = 1; i <= 4; i++){
        topRowColor += i <= topRow ? 'R' : 'O';
        secondRowColor += i <= secondRow ?  'R' : 'O';
        bottomRowColor +=  i <= bottomRow ? 'Y' : 'O';
    }
    for(let i = 1; i <= 11; i++){
        if(i <= thirdRow){
            thirdRowColor += i % 3 === 0 ? 'R' : 'Y'
        } else {
            thirdRowColor += 'O'
        }
    }
    
    return(`${secondBlinker?'Y':'O'}\n${topRowColor}\n${secondRowColor}\n${thirdRowColor}\n${bottomRowColor}`);
}