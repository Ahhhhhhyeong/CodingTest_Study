const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s = "";
let n = 0;
let commands = [];
let lineCount = 0;

rl.on("line", (line) => {
  if (lineCount === 0) {
    s = line;
  } else if (lineCount === 1) {
    n = Number(line);
  } else {
    commands.push(line);

    // ✅ n개 다 받으면 실행
    if (commands.length === n) {
      solution(s, n, commands);
      rl.close(); // 입력 종료
    }
  }
  lineCount++;
});

// Please Write your code here.
class Node {
    constructor(data) {
       this.data = data 
       this.next = null
       this.prev = null
    }
}

function solution(s,n,commands){
    let cur = new Node(s);
    let result = [];

    for(let i = 0; i < n; i++){
        const cmd = commands[i].split(' ');

        // 1
        if(cmd[0] === '1'){
            const newNode = new Node(cmd[1]);
            newNode.next = cur;
            newNode.prev = cur.prev;

            if(cur.prev) cur.prev.next = newNode;
            cur.prev = newNode;
        }
        // 2
        else if(cmd[0] === '2'){
          const newNode = new Node(cmd[1]);
          newNode.prev = cur;
          newNode.next = cur.next;

          if(cur.next) cur.next.prev = newNode;
          cur.next = newNode;
        }
        //3
        else if(cmd[0] === '3'){
          if(cur.prev) cur = cur.prev;
        }

        //4
        else if(cmd[0] === '4'){
          if(cur.next) cur = cur.next;
        }

        // output
        const prev = cur.prev ? cur.prev.data : "(Null)";
        const curr = cur.data;
        const next = cur.next ? cur.next.data : "(Null)";

        result.push(`${prev} ${curr} ${next}`);
    }

    console.log(result.join('\n'));
}