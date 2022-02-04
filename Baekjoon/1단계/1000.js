const readline = require("readline");
 const std = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

/* 문자형 숫자를 두개 입력받아 숫자로 변환한후 두개를 더해서 출력하는 예제  */
std.on('line',(line)=>{
    input = line.split(' ').map(el => Number(el));
    console.log(input[0] + input[1]);
    std.close();
}).on('close',()=>process.exit())

// 입력
// 1 2
// 출력
// 3