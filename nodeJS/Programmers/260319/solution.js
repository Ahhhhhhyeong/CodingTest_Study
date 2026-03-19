/** 여행 경로
 * https://school.programmers.co.kr/learn/courses/30/lessons/43164
 * 
 * 1. 처음 출발지는 무조건 ICN 이기 때문에, ICN에서 출발하는 모든 티켓 확인,
 * 2. 티켓이 여러개인 경우, 도착지의 알파벳 순으로 가장 앞서는 곳을 먼저 선택 / 티켓이 하나 인 경우 그 티켓 선택
 * 3. 선택한 티켓의 도착지에서 다시 1, 2번 과정 반복
 * 
 * 입출력 예
tickets	return
[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
[["ICN", "AAA"], ["ICN", "CCC"], ["CCC", "DDD"], ["AAA", "BBB"], ["AAA", "BBB"], ["DDD", "ICN"], ["BBB", "AAA"]]    ["ICN", "CCC", "DDD", "ICN", "AAA", "BBB", "AAA", "BBB"]
 */

const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];
console.log(solution(tickets)); 

function solution(tickets) {
    let answer = [];
    const visited = new Array(tickets.length).fill(false);
    
    function dfs(current, path){
        // 모든 티켓을 사용한 경우, 경로를 저장
        if(path.length === tickets.length + 1){
            answer = path;
            return;
        }
        const temp = [];
        // 현재 위치에서 출발하는 티켓을 탐색
        for(let i = 0; i < tickets.length; i++){
            // 출발지의 티켓이 여러개인 경우
            if(tickets[i][0] === current && !visited[i]){
                // 도착지를 알파벳 순으로 정렬하기 위해 임시 배열에 저장
                temp.push({index: i, destination: tickets[i][1]});
            }
        }

        // 도착지를 알파벳 역순으로 정렬 : pop()로 가장 앞서는 도착지를 선택하기 위해 역순으로 정렬
        temp.sort((a, b) => b.destination.localeCompare(a.destination));
        
        // 정렬된 티켓을 사용하여 DFS 탐색
        for(let i = 0; i < temp.length; i++){
            const {index, destination} = temp[i];
            visited[index] = true; // 티켓 사용 표시
            dfs(destination, [...path, destination]); // 다음 위치로 이동
            visited[index] = false; // 백트래킹: 티켓 사용 해제
        }
    }

    dfs("ICN", ["ICN"]); // ICN에서 출발
    return answer;
}