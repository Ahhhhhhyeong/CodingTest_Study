// 원형 이중 연결 리스트
    const readline = require("readline");

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

    let firstArr;
    let cities;
    let queries = [];
    let lineCount = 0;
    rl.on("line", (line) => {
    if (lineCount === 0) {
        firstArr = line.trim().split(" ").map(Number);
    } else if(lineCount === 1){
        cities = line.trim().split(" ");
    } else {
        queries.push(line);
        // ✅ n개 다 받으면 실행
        if (queries.length === firstArr[0]) {
        solution(firstArr[0], firstArr[1], cities, queries);
        rl.close(); // 입력 종료
        }
    }
    lineCount++;
    });

    class LinkedNode{
        constructor(data){
            this.data = data
            this.prev = null
            this.next = null
        }
    }

    function solution (n,q,cities,queries){
        let result = [];
        let head = new LinkedNode(cities[0]);
        let cur = head;

        // 초기 연결 리스트
        for(let i = 1; i < n; i++){
            const newNode = new LinkedNode(cities[i]);
            cur.next = newNode;
            newNode.prev = cur;
            cur = newNode;
        }

        cur.next = head;
        head.prev = cur;
        cur = head;

        for(let i = 0; i < q; i++){
            const cmd = queries[i].split(" ");
            // 1: 오른쪽으로 이동
            if(cmd[0] === '1'){
                if(cur.next) cur = cur.next;
            }
            // 2: 왼쪽으로 이동
            else if(cmd[0] === '2'){
                if(cur.prev) cur = cur.prev;
            }
            // 3: 오른쪽 삭제
            else if(cmd[0] === '3'){
                if(cur.next) {
                    const target = cur.next;
                    cur.next = target.next;
                    if(target.next) target.next.prev = cur;
                }
            }
            // 4: 오른쪽 삽입
            else if(cmd[0] === '4'){
                const newNode = new LinkedNode(cmd[1]);
                newNode.prev = cur;
                newNode.next = cur.next;
                
                if(cur.next) cur.next.prev = newNode;
                cur.next = newNode;
            }

            const left = cur.prev ? cur.prev.data : -1;
            const right = cur.next ? cur.next.data : -1;

            if(left === -1 || right === -1 || left === right){
                result.push(-1);
            } else {
                result.push(left + " " + right);
            }
        }

        console.log(result.join('\n'));
    }