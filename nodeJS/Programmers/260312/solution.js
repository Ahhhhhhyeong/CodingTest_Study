/** 단어 변환
 * 
 * begin	target	words	return
"hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]	4
"hit"	"cog"	["hot", "dot", "dog", "lot", "log"]	0
 * 
 */

const words = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(solution("hit", "cog", words)); // 4


function solution(begin, target, words) {
    let answer = 0;
    // words안에 target이 없으면 0 반환
    if(!words.includes(target)) return 0;

    // begin에서 시작해서 target까지의 최단 경로
    const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
    const visited = new Array(); // 방문한 단어

    while(queue.length > 0){
        const [current, count] = queue.shift();
        console.log(current, count);
        // 현재 단어가 target이면 횟수 반환
        if(current === target) {
            answer = count;
            break;
        }
        // words를 순회하며 한 글자만 다른 단어 찾기
        for(let i = 0; i < words.length; i++){
            const word = words[i];
            if(visited.includes(word)) continue; // 이미 방문한 단어는 패스
            let diffCount = 0; 
            for(let j = 0; j < current.length; j++){
                if(current[j] !== word[j]) diffCount++;           
            }
            // 다른 알파벳이 한 개인 경우 queue에 추가 
            if(diffCount === 1){
                queue.push([word, count + 1]);
                visited.push(word);
            }
            else continue;
        }
    }

    return answer;
}