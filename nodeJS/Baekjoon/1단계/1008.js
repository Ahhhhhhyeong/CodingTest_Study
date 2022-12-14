const readline = require("readline");
 const std = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });


// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
std.on('line',(line)=>{
    input = line.split(' ').map(el => Number(el));
    console.log(input[0] / input[1]);
    std.close();
}).on('close',()=>process.exit())
