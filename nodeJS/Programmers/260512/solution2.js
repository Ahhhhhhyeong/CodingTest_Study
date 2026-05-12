// 2025 카카오 하반기 1차 - 중요한 단어를 스포방지
// https://school.programmers.co.kr/learn/courses/30/lessons/468370

/** memo
 * 왼쪽 -> 오른쪽 순서로 클릭
 * [스포일러 문자 시작되는 지점, 끝나는 지점] 
 * 각 단어가 어떤 spoiler구간에 걸쳐 있는지 체크
 * 단어 상태 분류
 * 언제 공개가 완료되는지 체크
 * 중요한 단어 조건
 *      - spoiler 단어여야 함
 *      - non-spoiler 구간에서 등장한 적 없어야 함
 * 
 */

const message = " banana apple"
const spoiler_ranges = [[0,0]]
console.log(solution(message, spoiler_ranges));

function solution(message, spoiler_ranges) {
    let answer = 0;
    // 각 단어가 어떤 구간에 있는지 체크
    const range = [];
    let start=0; let end=0; let cnt = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i] === ' ') {
            cnt = 0;
            end = i-1;
            range.push({
                word: message.substring(start, end+1),
                start,
                end,
                revealTime: -1,
                spoiler: false
            });
            continue;
        }
        if(cnt === 0){
            start = i;
        }
        cnt++;
    }

    if(range.length === 0) { //단어가 하나 인 경우
        range.push({
            word: message,
            start: 0,
            end: message.length - 1,
            revealTime: -1,
            spoiler: false
        })
    } else { // 마지막 단어 입력
        range.push({
            word: message.substring(start, message.length),
            start: start,
            end: message.length-1,
            revealTime: -1,
            spoiler: false,
        })
    }

    // 하나씩 공개??? 사실 여기서부터 이해 안감
    const normalWords = new Set();
    for(let i = 0; i <  range.length; i++){
        let wordStart = range[i].start;
        let wordEnd = range[i].end;
        for(let j = 0; j < spoiler_ranges.length; j++){
            let spoilerStart = spoiler_ranges[j][0];
            let spoilerEnd = spoiler_ranges[j][1];
            if(!(spoilerStart > wordEnd || spoilerEnd < wordStart)){
                range[i].spoiler = true;
                range[i].revealTime = j;
            }
        }
        if(range[i].revealTime === -1){
            normalWords.add(range[i].word);
        }
    }  
    const revealedWords = new Set();
    range.forEach(({word, start, end, revealTime, spoiler}) => {
        if(spoiler && !normalWords.has(word) && !revealedWords.has(word)){
            answer++;
            revealedWords.add(word);
        }
    });

    console.log(range)
    console.log(revealedWords)

    return answer ;
}