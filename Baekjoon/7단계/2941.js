/**
 * 예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
 * dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

 let arr = input[0].split("");
 let cnt = 0;

 for(let i=0; i<arr.length; i++){
    let leftWord = arr[i-1];
    let nowWord = arr[i];
    let rightWord = arr[i + 1];
    let rrWord = arr[i + 2];

    if(nowWord == 'c'){
        if(rightWord == '=' || rightWord == '-'){
            cnt++; 
            i++;
            continue;
        }
    }
    if(nowWord == 'd'){
        if(rightWord == 'z' && rrWord == '='){
            cnt++; 
            i+=2;
            continue;
        }
        if(rightWord == '-'){
            cnt++; 
            i++;
            continue;
        }
    }
    if(nowWord == 'l' && rightWord == 'j'){
        cnt++; 
        i++;
        continue;
    }
    if(nowWord == 'n' && rightWord == 'j'){
        cnt++; 
        i++;
        continue;
    }
    if(nowWord == 's' && rightWord == '='){
        cnt++; 
        i++;
        continue;
    }
    if(nowWord == 'z'){
       if(leftWord !== 'd' && rightWord == '='){
           cnt++;
           i++;
           continue;
       }
    }
    cnt++;
 }
 console.log(cnt);