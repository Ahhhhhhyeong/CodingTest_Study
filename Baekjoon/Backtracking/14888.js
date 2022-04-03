/** N까지 자연수 중 중복 없이 중복 없이 M개를 고른 수열 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = input[1].split(' ').map(x => +x);
let operator = input[2].split(' ').map(x => +x);

let min = 1000000000;
let max = -1000000000;

const dfs = (cnt, val) =>{
    const oriVal = val; // 초기화 할 때 사용
    
    if(cnt == input[0] - 1){
        if(val > max)
            max = val;
        if(val < min)
            min = val;
        return;
    } else {
        for(let i = 0; i < 4; i++){
            if(operator[i] > 0){
                switch(i){
                    case 0:
                        val+=num[cnt+1];
                    break;
                    case 1:
                        val-=num[cnt+1];
                    break;
                    case 2:
                        val*=num[cnt+1];
                    break;
                    case 3:
                        if(val>=0){
                            val = Math.floor(val/num[cnt+1])
                        }else{
                            val = Math.floor((-1)*val/num[cnt+1])
                            if(val>0) val = val*(-1);// -0이 나올 수도 있기 때문에 
                        }
                    break;
                }
                operator[i]--;
                dfs(cnt+1, val);
                val = oriVal;
                operator[i]++;
            }
        }
    }
    return;
}

dfs(0, num[0]);
console.log(`${max}\n${min}`);