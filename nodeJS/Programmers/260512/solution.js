// 문자열 겹쳐쓰기 https://school.programmers.co.kr/learn/courses/30/lessons/181943

console.log(solution("He11oWor1d","lloWorl",2));

function solution(my_string, overwrite_string, s) {
    var answer = '';
    let end = overwrite_string.length + s;
    answer = my_string.slice(0, s) + overwrite_string + my_string.slice(end);
    return answer;
}