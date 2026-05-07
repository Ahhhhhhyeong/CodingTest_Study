/** Problem — Card Masking
카드 정보 문자열이 주어집니다.
각 줄은 아래 형식입니다.
NAME,CARD_NUMBER
카드 번호는:
XXXX-XXXX-XXXX-XXXX
형식입니다.

규칙
유효한 카드만 필터링하세요.
유효 조건:
- 카드 번호는 숫자만 있어야 함
- `-` 기준 4자리씩 총 4그룹
- 마지막 그룹 제외 전부 마스킹 처리

반환 규칙
유효한 카드만 아래 형식으로 반환:
`NAME => ****-****-****-1234`
입력 순서 유지.
여러 줄은 `\n` 으로 연결.
유효한 카드가 없으면:
`No valid cards`
반환.

Example
입력:
JACK,1234-5678-9999-1111
AMY,1111-2222-3333-ABCD

출력:
JACK => ****-****-****-1111
*/

const cards1 =
`JACK,1234-5678-9999-1111
AMY,1111-2222-3333-ABCD
TOM,9999-8888-7777-6666`;

const cards2 =
`A,1111-2222-3333
B,abcd-2222-3333-4444`;

const cards3 =
`MIKE,1234-1234-1234-0000`;

const cards4 =
`RYAN,0000-0000-0000-9999
CON,1111-1111-1111-1111`;

const card5 = `RYU,aaaa-ra11-2112-1234
CON,1234-12-3123-414`

console.log(maskCards(cards4));

function maskCards(data) {
    const result = [];
    const arr = data.split('\n');
    for(let i = 0; i < arr.length; i++){
        const chk = arr[i].split(',');
        const name = chk[0];
        // 1. 유효한 카드번호인지 체크
        const cardnum = chk[1].split('-');
        // 그룹 개수 체크
        if(cardnum.length !== 4){
            continue;
        } 

        let valid = true;
        for(let j = 0; j < cardnum.length; j++){
            const re = /^\d{4}$/;
            const ok = re.exec(cardnum[j]);
            if(!ok) {
                valid = false;
                break;      
            }
        }

       if(valid){
        const masked = `****-****-****-${cardnum[3]}`
        result.push(`${name} => ${masked}`);
       }
    }
    return result.length === 0 ? 'No valid cards' : result.join('\n');
}