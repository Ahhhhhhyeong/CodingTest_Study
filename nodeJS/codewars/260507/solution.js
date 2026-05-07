
solution(`JACK:DEPOSIT:200
AMY:DEPOSIT:500
JACK:WITHDRAW:50`);

function solution(input) {
   const arr = input.split('\n');
   const account = new Map();
   for(let i = 0; i < arr.length; i++){
        const chk = arr[i].split(':');
        let person = chk[0];
        let money = Number(chk[2]);
        if(chk[1] === 'DEPOSIT'){ // 추가
            account.set(person, account.get(person) ? account.get(person) + money : money);
        } else if(chk[1] === 'WITHDRAW'){ // 차감
            account.set(person, account.get(person) ? account.get(person) - money : -money);
        }
   }

   console.log([...account.entries()].sort((a,b) => {
    if(b[1] === a[1]){
        return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
   })
   .map(([name, balance]) => `${name} => ${balance}`)
   .join('\n')
);
}