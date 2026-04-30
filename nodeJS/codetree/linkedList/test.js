const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(' ').map(Number);
const people = input[1].split(' ');
const commands = input.slice(2, 2 + q).map(line => line.split(' '));


class Node{
    constructor(name){
        this.name = name;
        this.prev = null;
        this.next = null;
    }
};

solution(n,m,q, people, commands);

function solution(N, M, Q, names, commands){
   const map = new Map();

    // 연결 리스트 생성
    let head = new Node(names[0]);
    map.set(names[0], head);
    let cur = head;

    for(let i = 1; i < N; i++){
        const node = new Node(names[i]);
        map.set(names[i], node); 
        cur.next = node;
        node.prev = cur;
        cur = node;
    }

    // lineHeads 초기화
    const lineHeads = [];
    let perLine = Math.floor(N / M);
    let extra = N % M;
    
    cur = head;
    for(let i = 0; i < M; i++){
        lineHeads[i] = cur;
        let count = perLine + (i < extra ? 1 : 0);
        for(let j = 0; j < count; j++){
            cur = cur.next;
        }
    }

    // helper: detach
    function detach(node) {
        if(node.prev) node.prev.next = node.next;
        if(node.next) node.next.prev = node.prev;

        node.prev = null;
        node.next = null;
    }

    // helper: insertBefore
    function insertBefore(node, target){
        node.prev = target.prev;
        node.next = target;

        if(target.prev) target.prev.next = node;
        target.prev = node;
    }

 // 명령 처리
    for(let i = 0; i < Q; i++){
        const cmd = commands[i];

        // 1 a b 의 경우
        if(cmd[0] === '1'){
            const A = map.get(cmd[1]);
            const B = map.get(cmd[2]);

            // lineHead에 갱신(A가 시작일 때)
            for(let j=0; j<M; j++){
                if(lineHeads[j] === A){
                    lineHeads[j] = A.next;
                }
            }

            detach(A);
            insertBefore(A, B);

            // B가 lineHead면 A가 새 Head가 되어야
            for(let j = 0; j < M; j++){
                if(lineHeads[j] === B){
                    lineHeads[j] = A;
                }
            }
        }

        // 2 a 인경우
        else if(cmd[0] === '2'){
            const A = map.get(cmd[1]);
            
            for(let j = 0; j < M; j++){
                if(lineHeads[j] === A){
                    lineHeads[j] = A.next;
                }
            }
            detach(A);
        }

        // 3 a b c 인 경우
        else if(cmd[0] === '3'){
            const A = map.get(cmd[1]);
            const B = map.get(cmd[2]);
            const C = map.get(cmd[3]);

            // lineHeads 갱신(A가 시작인경우)
            for(let j = 0; j < M; j++){
                if(lineHeads[j] === A){
                    lineHeads[j] === B.next;
                }
            }
            
            // 구간 제거
            if(A.prev) A.prev.next = B.next;
            if(B.next) B.next.prev = A.prev;

            // 삽입
            A.prev = C.prev;
            B.next = C;

            if(C.prev) C.prev.next = A;
            C.prev = B;

            // C가 lineHead면 A로 바뀜
            for(let j = 0; j < M; j++){
                if(lineHeads[j] === C) {
                    lineHeads[j] = A;
                }
            }
        }
    }

    // 출력
    for(let i = 0; i < M; i++){
        let curr = lineHeads[i];
        let nextHead = lineHeads[i+1];

        let line =[];

        while(curr && curr !== nextHead){
            line.push(curr.name);
            curr = curr.next;
        }

        console.log(line.join(' '));
    }
}