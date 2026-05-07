// Login history
/**
 * 규칙
 * LOGIN → 접속 상태
 * LOGOUT → 접속 종료 상태
 * 반환 규칙 
현재 로그인 상태인 유저 이름을:

길이 내림차순
길이가 같으면 알파벳 오름차순

정렬 후 \n 으로 이어 반환.

로그인 중인 유저가 없으면:  
`No active users`
반환.
 */
console.log(activeUsers(`RYAN LOGIN
TUBE LOGIN
RYAN LOGOUT
CON LOGIN`))

function activeUsers(logs) {
    const arr = logs.split('\n');   
    const login = new Set();
    const logout = new Set();
    for(let i = 0; i < arr.length; i++){
        let chk = arr[i].split(' ');
        chk[1] === 'LOGIN' ? login.add(chk[0]) : logout.add(chk[0]);
    }
    
    const result = [...login]
        .filter(name => !logout.has(name));

    if(result.length === 0) {
        return 'No active users';
    }

    return result.sort((a,b) => {
        if(b.length === a.length){
            return a.localeCompare(b);
        }

        return b.length - a.length;
    }).join('\n');
}