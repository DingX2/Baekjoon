// const solution = (chicken, answer=0) => {
//     while (chicken >= 10){
//         answer += Math.floor(chicken/10);
//         chicken = Math.floor(chicken/10) + chicken%10;
//     }
//     return answer;
// }
// 진법 계산으로 표현할 수 있음 9번 먹으면, 1개 
const solution = (chicken) => parseInt((chicken-1)/9);